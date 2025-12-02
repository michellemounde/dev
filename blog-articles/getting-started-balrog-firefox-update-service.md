# Getting Started with Balrog: The Firefox Update Service

Software gets updates all the time and in this blog post I’ll highlight the way in which you get the correct software updates for your device. Today, I'll take you behind the scenes of release engineering, using Mozilla's Balrog as an example. This service powers updates for Firefox, Mozilla’s open source browser, and other Mozilla products. It is an essential tool for ensuring your software stays secure and efficient.

## But why use an update service in the first place?

For starters, an update service like Balrog offers increased speed, flexibility, and scalability when serving updates to users. By streamlining the release management process, Balrog enables the release engineering team to adapt more efficiently to changing business requirements.

Second, when Firefox was created there were no OS-level or other ways to update applications like the Google Play Store, Apple App Store and Microsoft Store. Finally, an update service also provides extensive control over updates and allows configuring updates based on things not available in update mechanisms such as in the Stores listed above.

## How Does Balrog Work?

Balrog serves updates by directing user update requests to the correct release. It [matches user requests to Balrog’s rules](https://mozilla-balrog.readthedocs.io/en/latest/database.html#how-are-requests-match-to-a-rule) to find the best fit for each request. Using this matched rule, Balrog maps the user request to a release that contains the necessary information to serve the correct update to the client.

### The Matching Process

The matching process is based on multiple properties of the application that is requesting an update. These properties are included in the update request URL. An update URL, for example could look like this:

> [https://aus-api.mozilla.org/update/6/Firefox/117.0/20230717111326/Darwin\_aarch64-gcc3/en-US/release/Darwin%2022.6.0/ISET%3ASSE4\_2%2CMEM%3A32010/default/default/update.xml?force=1](https://mozilla-balrog.readthedocs.io/en/latest/database.html#how-are-requests-match-to-a-rule)

In the above URL aus, stands for application update service. The properties in the above URL are as follows:

| **URL Part** | **Property** | **Description** |
| --- | --- | --- |
| /Firefox | Product | The name of the application. |
| /117.0 | Version | The version of the application requesting an update. Must be at least a two-part version string. |
| /20230717111326 | Build ID | The build ID of the application. |
| /Darwin\_aarch64-gcc3 | Build Target | The target platform of the application. |
| /en-US | Locale | The locale of the application. |
| /release | Channel | The update channel of the application. |
| /Darwin%2022.6.0 | OS Version - Darwin 22.6.0 | The OS Version of the application. This field is primarily used to point de-supported operating systems to their last supported build. |
| /ISET%3ASSE4\_2%2CMEM%3A32010 | System Capabilities: | Contains comma separated data and breaks down into multiple database columns (instructionSet, memory, jaws) |
|  | 1\. Instruction Set - ISET:SSE4\_2 | The most modern instruction set supported by the client requesting an update. This field is primarily used to de-support users based on their hardware such as users who do not support SSE2. |
|  | 2\. Memory - MEM:32010 | The amount of RAM, in megabytes, that the client requesting the update has. |
|  | 3\. JAWS - NULL | Whether or not the Rule should apply to queries that indicate a client that has an incompatible version of the JAWS screen reader installed. |
| /default | Distribution | The partner distributions name for the application or “default” if the application is not a partner build. Must be sent in order for the rule to match. A comma separated list may be used to list multiple distributions. |
| /default | Dist Version | The version of the partner distribution of the application or “default” if the application is not a partner build. |

There are a few special cases to consider when matching a request to a rule and those are:

1. Header Architecture: The architecture of the OS of the client as guessed based on build target. Mostly deprecated as this is included in the build target. This is extracted from the User-Agent header e.g “PPC” and “Intel” are the only possible values

2. Mig64: Whether or not the Rule should apply to queries that have opted into 32 -&gt; 64-bit migration. It is optional, and comes from the query string instead of the path e.g. True, False, or NULL


## Other Features of Balrog

Beyond serving updates, Balrog offers several features that enhance the efficiency of release management. These include enabling faster releases of software updates, disabling releases quickly in case of any errors, comparing previous releases to current ones, viewing changes to releases before approval, requiring sign offs before shipping products and increasing automation in the release management process.

## My Experience with Balrog

As someone who uses Firefox, it's exciting to see how the update process works behind the scenes. Knowing exactly where a request is going and how the correct product is served back is incredibly rewarding. In addition, It’s exciting to work on a product that receives requests from millions of users. Balrog handles tens of thousands of requests per second, making it a crucial tool for ensuring a smooth user experience.

Before I started working on Balrog, I hadn't heard of release engineering. It is the creation and maintenance of the infrastructure and pipelines required to build, test, and deliver software. As I delved deeper into this topic, I realized just how integral it is to the software we use every day.

You can read more about Release Engineering in my previous blog post: [Release Engineering? A Brief Explanation](https://michellemounde.github.io/dev/pages/blog-article.html?article=release-engineering-a-brief-explanation.md&title=What%20is%20Release%20Engineering?%20A%20Brief%20Explanation).

At its core, Balrog is the software that drives the Mozilla update server, facilitating quick, flexible, and scalable updates for software products. This understanding holds immense value for programmers, as it allows us to comprehend how software widely used by millions of individuals is effectively released across various devices and configurations.

Join me in my exploration of Balrog in updating Firefox and other Mozilla products. We'll explore release engineering, its significance in the development and maintenance of software, and how it plays a pivotal role in ensuring seamless updates. This exploration will provide valuable insights into the inner workings of a product you likely use every day.
