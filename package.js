Package.describe({
  name: 'siliconangle:paginated-subscription',
  summary: "Easily paginate a subscription that takes a limit parameter.",
  version: "0.0.1",
  documentation : "https://github.com/siliconangle/paginated-subscription/blob/master/README.md",
  git: "https://github.com/siliconangle/paginated-subscription"
});

Package.onUse(function (api, where) {
  api.versionsFrom("METEOR@0.9.0");
  api.addFiles('paginated_subscription.js', 'client');
});

