import { apiInitializer } from "discourse/lib/api";
import DiscourseURL from "discourse/lib/url";

export default apiInitializer("1.8.0", (api) => {
  api.onPageChange(async (path) => {
    const currentUser = api.getCurrentUser();

    // Exit early if no user is logged in or the user is an admin
    if (!currentUser || currentUser.admin) {
      return;
    }

    // Parse subscription groups and user groups
    const subscriptionGroups = settings.subscription_groups?.split("|") || [];
    const userGroups = currentUser.groups?.map((group) => group.name) || [];

    // Check if the user is a member of any subscription group
    const isMember = userGroups.some((group) =>
      subscriptionGroups.includes(group)
    );

    // Redirect if user is not a member and not already on the subscription page
    if (subscriptionGroups && !isMember && !path.startsWith("/s")) {
      DiscourseURL.redirectTo("/s");
    }
  });
});
