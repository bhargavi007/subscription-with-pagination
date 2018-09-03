# paginated_subscription
 This package adds pagination to Meteor's standard subscriptions. This is according to the latest version of meteor

## Installation

``` sh
$ meteor add siliconangle:paginated-subscription
```

## Usage

This package makes available a single function `Meteor.subscribeWithPagination`. Like the built in `Meteor.subscribe`, it returns a handle, which should be used to keep track of the state of the subscription:

```js
var handle = Meteor.subscribeWithPagination('posts', 10);
```

The arguments are as usual to `Meteor.subscribe`, with an exception:

1. The last argument must be a number, indicating the number of documents per page.
This can be followed by callback functions in style of `Meteor.subscribe`.

The paginated subscription expects you to have a publication setup, as normal, which expects as a final argument the *current* number of documents to display (which will be incremented, in a infinite scroll fashion):

```js
Meteor.publish('posts', function(limit) {
  return Posts.find({}, {limit: limit});
});
```

The important part of all this is the `handle`, which has the following API:

 - `handle.loaded()` - how many documents are currently loaded via the sub
 - `handle.limit()` - how many have we asked for
 - `handle.ready()` - are we waiting on the server right now?
 - `handle.loadNextPage()` - fetch the next page of results

The first three functions are reactive and thus can be used to correctly display an 'infinite-scroll' like list of results.

