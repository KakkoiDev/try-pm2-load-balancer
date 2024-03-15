# Try PM2 Load Balancer

POC for PM2 clusterization with stress test.

## Usage

`npm i`: install dependencies

### Single instance testing:

`npm start`: start single instance

`npm run load`: run load testing

### Clustered instances testing:

`npm run cluster:up`: boot the cluster

`npm run load`: run load testing

`npm run cluster:down`: delete the cluster

## benchmarks

### Single instance:

```
Target URL:          http://localhost:3000/load
Max requests:        1000
Concurrent clients:  60
Running on cores:    6
Agent:               none

Completed requests:  1000
Total errors:        1
Total time:          1734.562 s
Mean latency:        100766.9 ms
Effective rps:       1

Percentage of requests served within a certain time
  50%      91027 ms
  90%      92011 ms
  95%      311967 ms
  99%      312569 ms
 100%      313268 ms (longest request)

   -1:   1 errors
```

## Clustered:

```
Target URL:          http://localhost:3000/load
Max requests:        1000
Concurrent clients:  60
Running on cores:    6
Agent:               none

Completed requests:  1000
Total errors:        0
Total time:          14.696 s
Mean latency:        850.9 ms
Effective rps:       68

Percentage of requests served within a certain time
  50%      924 ms
  90%      958 ms
  95%      972 ms
  99%      1015 ms
 100%      1076 ms (longest request)
```

## resources

- Node Cluster Documentation: https://nodejs.org/api/cluster.html#cluster
- PM2 Load Balancing Documentation: https://pm2.io/docs/runtime/guide/load-balancing/
- Scaling your Node.js app using the "cluster" module: https://www.youtube.com/watch?v=6lHvks6R6cI&list=TLPQMTQwMzIwMjR1sbDIAbH9fQ&index=2
- PM2 Production Manager Complete Course | Load Balancing | Manage Multiple Apps in Server: https://www.youtube.com/watch?v=ceEde5xRZ5c
