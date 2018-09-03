Package.describe({
  name: 'siliconangle:paginated-subscription',
  summary: "Easily paginate a subscription that takes a limit parameter.",
  version: "0.0.1",
  git: "https://github.com/siliconangle/paginated-subscription"
});

Package.onUse(function (api, where) {
  api.versionsFrom("METEOR@1.7.0.5");
  api.addFiles('paginated-subscription.js', 'client');
});

