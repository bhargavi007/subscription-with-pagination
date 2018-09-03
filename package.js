Package.describe({
  name: 'siliconangle:paginated-subscription',
  summary: "Easily paginate a subscription that takes a limit parameter.",
  version: "0.1.0",
  git: "https://github.com/siliconangle/paginated_subscription"
});

Package.onUse(function (api, where) {
  api.versionsFrom("METEOR@1.3.0");
  api.addFiles('paginated_subscription.js', 'client');
});
