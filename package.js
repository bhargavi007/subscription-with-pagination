Package.describe({
  name: 'bhargavi007:subscriptionWithPagination',
  summary: "Easily paginate a subscription that takes a limit parameter.",
  version: "0.0.1",
  git: "https://github.com/bhargavi007/subscriptionWithPagination"
});

Package.onUse(function (api, where) {
  api.versionsFrom("METEOR@1.7.0.5");
  api.addFiles('paginated-subscription.js', 'client');
});

