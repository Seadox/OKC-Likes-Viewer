Java.perform(() => {
  const VoteTypeEnum = Java.use("com.okcupid.okcupid.data.model.VoteTypeEnum");

  const ids = new Set();

  const OnStackMatch = Java.use(
    "com.okcupid.okcupid.graphql.api.fragment.ApolloDoubleTakeStack$OnStackMatch"
  );
  OnStackMatch["$init"].implementation = function (
    match,
    stream,
    targetLikesSender,
    profileHighlights,
    hasSuperlikeRecommendation
  ) {
    if (targetLikesSender === true && match.user !== null) {
      const user = match.user.value;
      const userId = user.id.value;

      ids.add(userId);
    }
    this["$init"](
      match,
      stream,
      targetLikesSender,
      profileHighlights,
      hasSuperlikeRecommendation
    );
  };

  const User = Java.use("com.okcupid.okcupid.data.model.User");
  User["$init"].overload(
    "java.lang.String",
    "java.lang.Boolean",
    "com.okcupid.okcupid.data.model.Percentages",
    "com.okcupid.okcupid.data.model.UserInfo",
    "java.lang.String",
    "java.util.List",
    "java.lang.Boolean",
    "com.okcupid.okcupid.data.model.Likes",
    "com.okcupid.okcupid.ui.doubletake.models.LastContacts",
    "java.lang.Boolean",
    "java.lang.Boolean",
    "java.lang.String",
    "java.lang.Long",
    "java.util.List",
    "com.okcupid.okcupid.data.model.Story",
    "java.lang.String",
    "java.util.List",
    "boolean",
    "java.lang.Boolean",
    "java.util.List",
    "java.lang.Boolean",
    "java.lang.Boolean",
    "com.okcupid.okcupid.ui.profile.model.FirstMessage",
    "java.lang.String",
    "java.lang.String",
    "java.lang.String",
    "boolean",
    "boolean",
    "com.okcupid.okcupid.ui.profile.model.Badge",
    "com.okcupid.okcupid.ui.profile.model.Badge",
    "java.lang.String",
    "com.okcupid.okcupid.data.model.VoteTypeEnum",
    "com.okcupid.okcupid.data.model.VoteTypeEnum",
    "java.lang.Boolean",
    "java.util.List",
    "java.lang.Boolean",
    "com.okcupid.okcupid.data.model.UserVerificationStatus",
    "java.util.List",
    "com.okcupid.okcupid.data.model.UserLocation",
    "java.lang.Integer",
    "boolean",
    "boolean",
    "com.okcupid.okcupid.ui.message.data.Message"
  ).implementation = function (
    userid,
    online,
    percentages,
    userInfo,
    username,
    list,
    bool,
    likes,
    lastContacts,
    inactive,
    bool2,
    str,
    l,
    list2,
    story,
    str2,
    list3,
    z,
    bool3,
    list4,
    bool4,
    bool5,
    firstMessage,
    str3,
    str4,
    str5,
    z2,
    z3,
    badge,
    badge2,
    str6,
    voteTypeEnum,
    voteTypeEnum2,
    bool6,
    list5,
    bool7,
    userVerificationStatus,
    list6,
    userLocation,
    num,
    z4,
    z5,
    message
  ) {
    if (ids[userid] && userInfo !== null) {
      const name = userInfo.displayName.value;
      const age = userInfo.age.value;
      const location = userInfo.location.value;

      const match_percentages = percentages.match.value;

      voteTypeEnum2 = VoteTypeEnum.valueOf("SUPERLIKE");

      console.log(
        `Name: ${name}, age: ${age}, location: ${location}, match percentages: ${match_percentages}%`
      );
    }
    this["$init"](
      userid,
      online,
      percentages,
      userInfo,
      username,
      list,
      bool,
      likes,
      lastContacts,
      inactive,
      bool2,
      str,
      l,
      list2,
      story,
      str2,
      list3,
      z,
      bool3,
      list4,
      bool4,
      bool5,
      firstMessage,
      str3,
      str4,
      str5,
      z2,
      z3,
      badge,
      badge2,
      str6,
      voteTypeEnum,
      voteTypeEnum2,
      bool6,
      list5,
      bool7,
      userVerificationStatus,
      list6,
      userLocation,
      num,
      z4,
      z5,
      message
    );
  };
});
