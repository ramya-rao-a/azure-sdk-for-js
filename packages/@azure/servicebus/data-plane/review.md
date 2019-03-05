# Service Bus Trivia

- An Azure Service Bus resource is called **Namespace**
- Service Bus Entities that can be created in a Namespace are
   - Queues
   - Topics
        - Think of them as the "pub" in the pub/sub model 
        - Has the "send" features as in the Queue
   - Subscriptions
        - Think of them as the "sub" in the pub/sub model
        - Has the "receive" features as in the Queue
        - We can have multiple Subscriptions for the same Topic
        - They have an extra feature called "rules" to filter messages received from the Topic
- The service has implementations for both protocols HTTP and AMQP, and we are tasked with creating a library that works with the latter as it is proven to be much faster than the former.
- The existing Nodejs library for Service Bus in production uses HTTP which the service team wants to deprecate in the service eventually

# AMQP Trivia

- Stands for **Advanced Message Queuing Protocol**
- Unlike HTTP, the same connection is used for multiple send/receive operations
- AMQP connection -> has AMQP sessions -> each session has AMQP links -> each link acts as a sender or a receiver

# Noteworthy Dependencies for Azure Service Bus library

- We use an open source library **rhea** which implements the protocol and AMQP connection/session/links
- **rhea** is already in use in production as part of the Nodejs library for Azure Event Hubs
- **amqp-common** is the package that has the re-usable code stripped out of the Event Hubs library in order to be re-used for Service Bus. We own this package.

# Service Bus Library Trivia

- Namespace             
     - Holds the AMQP connection to the Azure Service Bus Namespace
     - Used to create clients to interact with Queues/Topics/Subscriptions
- QueueClient           
     - Used to Send/Receive/Peek messages & schedule to send messages at a later time to an Azure Service Bus Queue
- TopicClient           
     - Used to Send messages as well as schedule to send messages at a later time to an Azure Service Bus Topic
- SubscriptionClient    
     - Used Receive/Peek messages from and Get/Add/Remove rules in an Azure Service Bus Subscription
- Sender                
     - Created from Queue/Topic client for send operations. Holds the AMQP sender link.
- Receiver              
     - Created from Queue/Subscription client for receive operations. Holds the AMQP receiver link.
