# Navigating the Codebase: Reflections on the First Half of My Programming Internship

Have you ever found yourself staring at a screen full of code, feeling utterly lost? If you're a junior developer or just starting out, chances are you've been there too. I was in the same boat during my Outreachy internship at Mozilla.

In the beginning, I was tasked with a project to create a rewind feature for [Balrog](https://github.com/mozilla-releng/balrog)'s UI. This feature would allow users to view historical versions of releases by accessing the database at a specific point in the past, which is invaluable for troubleshooting errors in current releases. The project was to span the full three months of my internship, covering coding, testing, and gathering user feedback for further improvements.

As I dove into the project, I discovered that timelines can be deceiving. Some tasks that seemed straightforward took longer than anticipated.

> Have you ever underestimated a task due to unforeseen complexities?

It's a common difficulty in the programming world, especially when learning new skills or navigating unfamiliar codebases. For instance, integrating the initial prototype into the main branch proved more complex than I expected, prompting me to explore alternative solutions before resorting to manual code transfer.

When I was getting started on the project, I felt lost when trying to figure out where to make code changes while navigating the largest codebase I have worked on so far.  To help with this I used a trick of mine where I take a deep breath and re-read issues carefully to understand where changes would need to be made. This counteracts the fast nervous reading I do, a habit that causes me to overlook some details while reading.

But it wasn't all about overcoming challenges. There were pleasant surprises too, like when deploying the initial version of the [rewind feature](https://github.com/mozilla-releng/balrog/pull/3079) to production took less time than I predicted. And throughout this process, I learned valuable lessons about Git, merging, rebasing, and the significance of the [similarity index](https://git.github.io/git-scm.com/docs/git-diff#Documentation/git-diff.txt---find-renamesltngt)—a metric that compares the amount of code changes to the file's original size.

Now, midway through my internship, I've achieved my original goals ahead of schedule and am eagerly awaiting feedback to refine and debug the feature. Looking ahead, I'll be tackling other critical issues for the team, such as:

1. [Requiring 2 admin sign offs for changes to permissions](https://github.com/mozilla-releng/balrog/issues/2194)

2. [Transition from using MethodViews in flask apps](https://github.com/mozilla-releng/balrog/issues/1102)


I owe a massive thank you to my mentors, Ben Hearsum and Gabriel Bustamante from Mozilla's Release Engineering Team, and Johan Lorenzo, the team's manager, for their invaluable guidance and availability, despite our differing time zones.

In this post, I've shared the ups and downs of my journey, lessons learned, and how I've adapted my goals for the remaining half of my internship. For those of you embarking on your own programming adventures or applying to Outreachy, remember that persistence is key. Through trial and error, asking for help, and consistent communication with mentors, you can navigate any codebase and achieve your goals.

If you're curious to see how the rest of my internship unfolds and to read about my first-time contributions to open source, follow me for updates. And who knows? The insights you gain might just be the stepping stones to your next big breakthrough.
