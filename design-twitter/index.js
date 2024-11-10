const {
    MinPriorityQueue,
} = require('@datastructures-js/priority-queue')

var Twitter = function () {
    this.time = 0
    this.followersMap = new Map()
    this.tweetMap = new Map()
};

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
    if (!this.tweetMap.has(userId)) this.tweetMap.set(userId, [])
    this.tweetMap.get(userId).push([this.time++, tweetId])
};

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    const tweets = [];
    const queue = new MinPriorityQueue({ priority: tweet => tweet[0] });

    const followees = this.followersMap.get(userId) || new Set()
    followees.add(userId);

    for (const followeeId of followees) {
        const userTweets = this.tweetMap.get(followeeId) || [];
        for (const tweet of userTweets) {
            queue.enqueue(tweet);
            if (queue.size() > 10) queue.dequeue();
        }
    }

    while (!queue.isEmpty()) tweets.push(queue.dequeue().element[1]);
    return tweets.reverse();
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
    if (!this.followersMap.has(followerId)) this.followersMap.set(followerId, new Set());
    this.followersMap.get(followerId).add(followeeId);
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    if (!this.followersMap.has(followerId)) return;
    this.followersMap.get(followerId).delete(followeeId);
};

var twitter = new Twitter()
console.log(twitter.postTweet(1, 5))
console.log(twitter.getNewsFeed(1))
console.log(twitter.follow(1, 2))
console.log(twitter.postTweet(2, 6))
console.log(twitter.getNewsFeed(1))
console.log(twitter.unfollow(1, 2))
console.log(twitter.getNewsFeed(1))
