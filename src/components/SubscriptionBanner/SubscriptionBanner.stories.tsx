import { fn } from "@storybook/test";
import SubscriptionBanner from "./SubscriptionBanner";

export default {
  title: "Subscription Banner",
  component: SubscriptionBanner,
};

export const Default = {
  args: {
    onClose: fn(),
    onSeeDetails: fn(),
  },
};
