var flag = false;

chrome.runtime.onMessage.addListener((type, sender, res) => {
  if (type == "show") {
    const tab = document
      .querySelector("#userRows-app")
      .getElementsByClassName("Q8o8ldWxQdXz5zE0jhgx");

    if (tab[0] !== undefined) tab[0].style.display = "none";

    const frame = document.getElementById("customFrame");
    if (frame === null && !flag) {
      const myFrame = document.createElement("div");
      myFrame.id = "customFrame";

      showLikes(myFrame, null);
      flag = true;

      document.querySelector("#userRows-app").appendChild(myFrame);
    }
  } else if (type == "hide") {
    const tab = document
      .querySelector("#userRows-app")
      .getElementsByClassName("Q8o8ldWxQdXz5zE0jhgx");

    const frame = document.getElementById("customFrame");
    if (frame !== null) frame.remove();

    if (tab[0] !== undefined) tab[0].style.display = "block";
    flag = false;
  }
});

function showLikes(element, key) {
  fetch("https://www.okcupid.com/graphql?operationName=userrowsIncomingLikes", {
    headers: {
      accept: "*/*",
      "accept-language": "en-US,en;q=0.9,he;q=0.8",
      "content-type": "application/json",
      "sec-ch-ua":
        '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-okcupid-locale": "en",
      "x-okcupid-platform": "DESKTOP",
      "x-okcupid-version": "1",
      cookie: document.cookie,
      Referer: "https://www.okcupid.com/who-likes-you",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body:
      '{"operationName":"userrowsIncomingLikes","variables":{"sort":"DESC_TIMESTAMP", "after":"' +
      key +
      '"},"query":"fragment UserFragment on User {\\n  id\\n  joinDate\\n  notificationCounts {\\n    likesIncoming\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment UserBlurredImage on User {\\n  primaryImageBlurred {\\n    square225\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment UserPrimaryImagesFragment on User {\\n  primaryImage {\\n    id\\n    caption\\n    original\\n    square60\\n    square82\\n    square100\\n    square120\\n    square160\\n    square225\\n    square400\\n    square800\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment UserrowMatchFragment on Match {\\n  matchPercent\\n  senderLikeTime\\n  senderLikes\\n  senderVote\\n  targetLikeTime\\n  targetVote\\n  likeTime\\n  senderMessageTime\\n  targetMessageTime\\n  targetLikeViaSpotlight\\n  targetLikeViaSuperBoost\\n  senderPassed\\n  firstMessage {\\n    text\\n    __typename\\n  }\\n  user {\\n    id\\n    username\\n    displayname\\n    age\\n    isOnline\\n    userLocation {\\n      id\\n      publicName\\n      __typename\\n    }\\n    ...UserPrimaryImagesFragment\\n    ...UserBlurredImage\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment PromoFragment on Promo {\\n  upsellType\\n  featureType\\n  name\\n  __typename\\n}\\n\\nfragment MatchPreviewBlurredImage on MatchPreview {\\n  primaryImageBlurred {\\n    square225\\n    __typename\\n  }\\n  __typename\\n}\\n\\nquery userrowsIncomingLikes($after: String, $sort: LikesListSort) {\\n  me {\\n    ...UserFragment\\n    id\\n    likes: likesIncomingWithPreviews(after: $after, sort: $sort) {\\n      data {\\n        ... on Match {\\n          ...UserrowMatchFragment\\n          __typename\\n        }\\n        ... on MatchPreview {\\n          ...MatchPreviewBlurredImage\\n          primaryImage {\\n            square225\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      pageInfo {\\n        after\\n        hasMore\\n        total\\n        __typename\\n      }\\n      __typename\\n    }\\n    lastBoost {\\n      id\\n      startTime\\n      endTime\\n      __typename\\n    }\\n    promosForPage(page: LIKES_INCOMING) {\\n      ...PromoFragment\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
    method: "POST",
  })
    .then((res) => res.json())
    .then((data) => {
      var likes = data.data.me.likes.data;
      var hasMore = data.data.me.likes.pageInfo.hasMore;
      var key = data.data.me.likes.pageInfo.after;

      likes.forEach((like) => {
        const para = document.createElement("img");
        para.src = like.primaryImage.square225;
        para.className = "customFrameImg";

        element.appendChild(para);
      });

      if (hasMore) showLikes(element, key);
    });
}
