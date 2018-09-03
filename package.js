Package.describe({
   name: 'siliconangle:paginated-subscription',
  summary: "Easily paginate a subscription that takes a limit parameter.",
  version: "0.0.1",
  documentation : "https://github.com/siliconangle/paginated_subscription/blob/master/README.md",
  git: "https://github.com/siliconangle/paginated_subscription"
});

Package.onUse(function(api) {
  api.versionsFrom('1.7.0.5');
  api.use('ecmascript');
  api.mainModule('paginated-subscription.js');
});

