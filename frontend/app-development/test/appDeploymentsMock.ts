import { IDeployment } from 'app-development/sharedResources/appDeployment/types';

const deploymentsString = `
{
  "results": [
    {
      "tagName": "2403",
      "envName": "at22",
      "build": {
        "id": "586909",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-11-21T13:18:13.7716882Z",
        "finished": "2022-11-21T13:19:03.641397Z"
      },
      "created": "2022-11-21T13:17:56.5841006+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2401",
      "envName": "at22",
      "build": {
        "id": "584677",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-11-18T12:08:57.5942581Z",
        "finished": "2022-11-18T12:09:38.0224056Z"
      },
      "created": "2022-11-18T12:08:43.4240233+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2401",
      "envName": "at22",
      "build": {
        "id": "584673",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-11-18T12:07:30.2596262Z",
        "finished": "2022-11-18T12:08:20.4218247Z"
      },
      "created": "2022-11-18T12:07:13.7938956+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2400",
      "envName": "at22",
      "build": {
        "id": "583575",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-11-17T11:52:25.1248848Z",
        "finished": "2022-11-17T11:53:15.2536918Z"
      },
      "created": "2022-11-17T11:52:05.8030667+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2399",
      "envName": "at22",
      "build": {
        "id": "582825",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-11-16T14:45:55.4854513Z",
        "finished": "2022-11-16T14:46:57.5641189Z"
      },
      "created": "2022-11-16T14:45:39.331025+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2398",
      "envName": "at22",
      "build": {
        "id": "582718",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-11-16T12:30:32.8457297Z",
        "finished": "2022-11-16T12:31:22.4175842Z"
      },
      "created": "2022-11-16T12:30:13.3025785+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2397",
      "envName": "at22",
      "build": {
        "id": "581697",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-11-15T13:11:30.623018Z",
        "finished": "2022-11-15T13:12:21.0334875Z"
      },
      "created": "2022-11-15T13:11:15.3059591+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2395",
      "envName": "at22",
      "build": {
        "id": "569975",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-11-02T08:06:29.7572182Z",
        "finished": "2022-11-02T08:07:02.7266Z"
      },
      "created": "2022-11-02T08:06:14.306959+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2395",
      "envName": "at22",
      "build": {
        "id": "569536",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-11-01T17:45:18.9544989Z",
        "finished": "2022-11-01T17:45:54.197862Z"
      },
      "created": "2022-11-01T17:45:03.2962076+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2394",
      "envName": "at22",
      "build": {
        "id": "569309",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-11-01T14:41:01.333926Z",
        "finished": "2022-11-01T14:41:37.2708095Z"
      },
      "created": "2022-11-01T14:40:44.9661211+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2392",
      "envName": "at22",
      "build": {
        "id": "568389",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-31T14:21:32.8382111Z",
        "finished": "2022-10-31T14:22:17.8968248Z"
      },
      "created": "2022-10-31T14:21:18.3992791+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2392",
      "envName": "at22",
      "build": {
        "id": "568385",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-31T14:19:59.8119987Z",
        "finished": "2022-10-31T14:20:44.6183667Z"
      },
      "created": "2022-10-31T14:19:46.1371282+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2390",
      "envName": "at22",
      "build": {
        "id": "566119",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-28T09:42:58.821414Z",
        "finished": "2022-10-28T09:43:43.228812Z"
      },
      "created": "2022-10-28T09:42:43.6604187+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2390",
      "envName": "at22",
      "build": {
        "id": "566115",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-28T09:41:28.6771648Z",
        "finished": "2022-10-28T09:42:01.6448416Z"
      },
      "created": "2022-10-28T09:41:13.3735524+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2389",
      "envName": "at22",
      "build": {
        "id": "566079",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-28T09:14:50.397424Z",
        "finished": "2022-10-28T09:15:45.385056Z"
      },
      "created": "2022-10-28T09:14:34.4958158+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2388",
      "envName": "at22",
      "build": {
        "id": "565329",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-27T11:01:07.329266Z",
        "finished": "2022-10-27T11:01:52.3407538Z"
      },
      "created": "2022-10-27T11:00:50.6453715+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2387",
      "envName": "at22",
      "build": {
        "id": "565320",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-27T10:59:02.1508758Z",
        "finished": "2022-10-27T10:59:47.5005845Z"
      },
      "created": "2022-10-27T10:58:45.9192945+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2386",
      "envName": "at22",
      "build": {
        "id": "565193",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-27T08:37:09.1197481Z",
        "finished": "2022-10-27T08:38:02.9069939Z"
      },
      "created": "2022-10-27T08:36:53.116381+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2383",
      "envName": "at22",
      "build": {
        "id": "564642",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-26T13:54:12.0858663Z",
        "finished": "2022-10-26T13:54:57.2267186Z"
      },
      "created": "2022-10-26T13:53:55.3113604+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2383",
      "envName": "at22",
      "build": {
        "id": "564608",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-26T13:14:01.3993363Z",
        "finished": "2022-10-26T13:14:34.7329441Z"
      },
      "created": "2022-10-26T13:13:46.1515972+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2383",
      "envName": "at22",
      "build": {
        "id": "564604",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-26T13:12:33.6398081Z",
        "finished": "2022-10-26T13:13:17.5941064Z"
      },
      "created": "2022-10-26T13:12:16.4868795+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2382",
      "envName": "at22",
      "build": {
        "id": "564560",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-26T12:25:28.9637875Z",
        "finished": "2022-10-26T12:26:13.2078958Z"
      },
      "created": "2022-10-26T12:25:13.0119422+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2381",
      "envName": "at22",
      "build": {
        "id": "564553",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-26T12:17:11.9598627Z",
        "finished": "2022-10-26T12:18:06.7220173Z"
      },
      "created": "2022-10-26T12:16:56.0181923+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2380",
      "envName": "at22",
      "build": {
        "id": "564544",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-26T12:15:16.3285516Z",
        "finished": "2022-10-26T12:15:51.2544536Z"
      },
      "created": "2022-10-26T12:14:59.7699821+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2379",
      "envName": "at22",
      "build": {
        "id": "562715",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-24T08:26:19.0581135Z",
        "finished": "2022-10-24T08:26:52.2348051Z"
      },
      "created": "2022-10-24T08:26:04.5213368+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2376",
      "envName": "at22",
      "build": {
        "id": "560702",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-21T11:27:46.6835425Z",
        "finished": "2022-10-21T11:28:29.9692958Z"
      },
      "created": "2022-10-21T11:27:31.8252538+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2375",
      "envName": "at22",
      "build": {
        "id": "560492",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-21T07:29:06.6892287Z",
        "finished": "2022-10-21T07:29:52.2191007Z"
      },
      "created": "2022-10-21T07:28:51.3551084+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2374",
      "envName": "at22",
      "build": {
        "id": "559866",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-20T13:10:19.7767553Z",
        "finished": "2022-10-20T13:11:03.8832929Z"
      },
      "created": "2022-10-20T13:10:03.9994498+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2373",
      "envName": "at22",
      "build": {
        "id": "559648",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-20T09:16:44.582992Z",
        "finished": "2022-10-20T09:17:29.1855545Z"
      },
      "created": "2022-10-20T09:16:29.7460905+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2372",
      "envName": "at22",
      "build": {
        "id": "558995",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-19T13:33:52.2902915Z",
        "finished": "2022-10-19T13:34:36.1692515Z"
      },
      "created": "2022-10-19T13:33:36.2645958+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2371",
      "envName": "at22",
      "build": {
        "id": "558806",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-19T10:50:36.3679596Z",
        "finished": "2022-10-19T10:51:20.3542517Z"
      },
      "created": "2022-10-19T10:50:17.8548091+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2369",
      "envName": "at22",
      "build": {
        "id": "558578",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-19T05:52:09.2598056Z",
        "finished": "2022-10-19T05:52:43.2212693Z"
      },
      "created": "2022-10-19T05:51:54.6558616+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2367",
      "envName": "at22",
      "build": {
        "id": "558137",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-18T14:42:58.43196Z",
        "finished": "2022-10-18T14:43:42.1969325Z"
      },
      "created": "2022-10-18T14:42:42.8176062+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2367",
      "envName": "at22",
      "build": {
        "id": "558058",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-18T12:47:30.475945Z",
        "finished": "2022-10-18T12:48:14.9803142Z"
      },
      "created": "2022-10-18T12:47:14.0804844+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2366",
      "envName": "at22",
      "build": {
        "id": "557229",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-17T11:47:34.8583878Z",
        "finished": "2022-10-17T11:48:08.9362429Z"
      },
      "created": "2022-10-17T11:47:19.2975337+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2365",
      "envName": "at22",
      "build": {
        "id": "557112",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-17T10:11:19.2319012Z",
        "finished": "2022-10-17T10:12:43.6202745Z"
      },
      "created": "2022-10-17T10:11:00.4428142+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2364",
      "envName": "at22",
      "build": {
        "id": "557070",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-17T09:31:55.5773863Z",
        "finished": "2022-10-17T09:32:48.3363865Z"
      },
      "created": "2022-10-17T09:31:40.7527317+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2363",
      "envName": "at22",
      "build": {
        "id": "557059",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-17T09:26:29.6119919Z",
        "finished": "2022-10-17T09:27:03.3846773Z"
      },
      "created": "2022-10-17T09:26:13.6929932+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2362",
      "envName": "at22",
      "build": {
        "id": "555030",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-14T11:59:26.6926936Z",
        "finished": "2022-10-14T12:00:11.1224488Z"
      },
      "created": "2022-10-14T11:58:35.8147973+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2361",
      "envName": "at22",
      "build": {
        "id": "554764",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-14T07:39:25.7170902Z",
        "finished": "2022-10-14T07:40:10.8247094Z"
      },
      "created": "2022-10-14T07:39:10.6363418+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2360",
      "envName": "at22",
      "build": {
        "id": "554210",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-13T13:02:20.1849749Z",
        "finished": "2022-10-13T13:02:55.0007752Z"
      },
      "created": "2022-10-13T13:02:04.2188234+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2359",
      "envName": "at22",
      "build": {
        "id": "554153",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-13T12:12:42.2458852Z",
        "finished": "2022-10-13T12:13:26.2539022Z"
      },
      "created": "2022-10-13T12:12:25.7677145+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2357",
      "envName": "at22",
      "build": {
        "id": "553471",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-12T18:08:56.0578819Z",
        "finished": "2022-10-12T18:09:29.5833549Z"
      },
      "created": "2022-10-12T18:08:42.3597542+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2356",
      "envName": "at22",
      "build": {
        "id": "553295",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-12T13:17:43.3815591Z",
        "finished": "2022-10-12T13:18:17.2853432Z"
      },
      "created": "2022-10-12T13:17:28.4489691+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2354",
      "envName": "at22",
      "build": {
        "id": "553280",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-12T13:12:41.4150969Z",
        "finished": "2022-10-12T13:13:25.353983Z"
      },
      "created": "2022-10-12T13:12:25.7542436+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2354",
      "envName": "at22",
      "build": {
        "id": "553008",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-12T08:52:22.7396298Z",
        "finished": "2022-10-12T08:53:06.357564Z"
      },
      "created": "2022-10-12T08:52:05.8872514+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2353",
      "envName": "at22",
      "build": {
        "id": "552558",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-11T19:37:47.6385282Z",
        "finished": "2022-10-11T19:38:30.805052Z"
      },
      "created": "2022-10-11T19:37:33.576409+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2352",
      "envName": "at22",
      "build": {
        "id": "552251",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-11T12:31:44.9236589Z",
        "finished": "2022-10-11T12:32:20.0020197Z"
      },
      "created": "2022-10-11T12:31:28.9654229+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2350",
      "envName": "at22",
      "build": {
        "id": "552142",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-11T10:37:32.5367474Z",
        "finished": "2022-10-11T10:38:16.7556566Z"
      },
      "created": "2022-10-11T10:37:17.4460187+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2350",
      "envName": "at22",
      "build": {
        "id": "551322",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-10T12:21:24.9953803Z",
        "finished": "2022-10-10T12:22:09.6049773Z"
      },
      "created": "2022-10-10T12:21:09.2459123+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2349",
      "envName": "at22",
      "build": {
        "id": "549193",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-07T10:34:23.348367Z",
        "finished": "2022-10-07T10:34:57.9888287Z"
      },
      "created": "2022-10-07T10:34:06.8911301+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2347",
      "envName": "at22",
      "build": {
        "id": "548522",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-06T13:49:07.1881286Z",
        "finished": "2022-10-06T13:49:43.4213704Z"
      },
      "created": "2022-10-06T13:48:49.4119331+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2347",
      "envName": "at22",
      "build": {
        "id": "548094",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-06T07:55:01.1518136Z",
        "finished": "2022-10-06T07:55:37.3872043Z"
      },
      "created": "2022-10-06T07:54:11.9790605+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2346",
      "envName": "at22",
      "build": {
        "id": "548073",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-06T07:47:51.1307116Z",
        "finished": "2022-10-06T07:49:55.9136442Z"
      },
      "created": "2022-10-06T07:47:28.0707568+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2345",
      "envName": "at22",
      "build": {
        "id": "548017",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-06T07:18:25.2173241Z",
        "finished": "2022-10-06T07:19:18.2387751Z"
      },
      "created": "2022-10-06T07:18:09.8028941+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2344",
      "envName": "at22",
      "build": {
        "id": "546891",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-04T20:31:42.5531618Z",
        "finished": "2022-10-04T20:32:15.8968753Z"
      },
      "created": "2022-10-04T20:31:28.9115372+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2340",
      "envName": "at22",
      "build": {
        "id": "546874",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-04T20:15:40.8664174Z",
        "finished": "2022-10-04T20:16:24.9215557Z"
      },
      "created": "2022-10-04T20:15:25.6704192+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2340",
      "envName": "at22",
      "build": {
        "id": "545803",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-10-03T12:00:35.092955Z",
        "finished": "2022-10-03T12:01:29.018716Z"
      },
      "created": "2022-10-03T12:00:11.1281799+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2340",
      "envName": "at22",
      "build": {
        "id": "543727",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-30T14:02:36.4399631Z",
        "finished": "2022-09-30T14:03:19.7477019Z"
      },
      "created": "2022-09-30T14:02:21.2045964+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2338",
      "envName": "at22",
      "build": {
        "id": "543651",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-30T12:04:19.6789497Z",
        "finished": "2022-09-30T12:05:03.5532316Z"
      },
      "created": "2022-09-30T12:04:04.4051076+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2338",
      "envName": "at22",
      "build": {
        "id": "542956",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-29T14:55:40.1107304Z",
        "finished": "2022-09-29T14:56:24.5988866Z"
      },
      "created": "2022-09-29T14:55:22.405916+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2337",
      "envName": "at22",
      "build": {
        "id": "542833",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-29T11:54:52.1710955Z",
        "finished": "2022-09-29T11:55:28.5456825Z"
      },
      "created": "2022-09-29T11:54:34.6952298+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2335",
      "envName": "at22",
      "build": {
        "id": "542802",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-29T11:10:35.1382093Z",
        "finished": "2022-09-29T11:11:10.1134486Z"
      },
      "created": "2022-09-29T11:10:18.0058287+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2335",
      "envName": "at22",
      "build": {
        "id": "542626",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-29T09:13:46.6982594Z",
        "finished": "2022-09-29T09:14:20.67118Z"
      },
      "created": "2022-09-29T09:13:31.5658583+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2334",
      "envName": "at22",
      "build": {
        "id": "542615",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-29T09:07:36.3593207Z",
        "finished": "2022-09-29T09:08:12.7149582Z"
      },
      "created": "2022-09-29T09:07:21.9001184+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2333",
      "envName": "at22",
      "build": {
        "id": "542512",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-29T07:57:49.8349736Z",
        "finished": "2022-09-29T07:58:34.5910051Z"
      },
      "created": "2022-09-29T07:57:31.2401046+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2331",
      "envName": "at22",
      "build": {
        "id": "541775",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-28T11:11:15.6140483Z",
        "finished": "2022-09-28T11:12:32.6947566Z"
      },
      "created": "2022-09-28T11:10:57.9305458+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2331",
      "envName": "at22",
      "build": {
        "id": "541676",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-28T08:44:33.3009932Z",
        "finished": "2022-09-28T08:45:07.2106728Z"
      },
      "created": "2022-09-28T08:44:14.506138+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2330",
      "envName": "at22",
      "build": {
        "id": "541580",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-28T06:53:58.4558543Z",
        "finished": "2022-09-28T06:54:41.5459455Z"
      },
      "created": "2022-09-28T06:53:30.4915861+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2329",
      "envName": "at22",
      "build": {
        "id": "537977",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-23T09:18:09.8273198Z",
        "finished": "2022-09-23T09:19:03.4678395Z"
      },
      "created": "2022-09-23T09:17:52.2202524+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2328",
      "envName": "at22",
      "build": {
        "id": "537416",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-22T14:26:41.6265431Z",
        "finished": "2022-09-22T14:27:27.9698374Z"
      },
      "created": "2022-09-22T14:26:24.614133+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2326",
      "envName": "at22",
      "build": {
        "id": "537396",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-22T14:05:21.1150537Z",
        "finished": "2022-09-22T14:06:04.1592752Z"
      },
      "created": "2022-09-22T14:05:02.7118435+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2325",
      "envName": "at22",
      "build": {
        "id": "537364",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-22T13:37:34.9695117Z",
        "finished": "2022-09-22T13:38:08.9910076Z"
      },
      "created": "2022-09-22T13:37:18.176454+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2318",
      "envName": "at22",
      "build": {
        "id": "537246",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-22T11:44:39.7868842Z",
        "finished": "2022-09-22T11:45:24.2532687Z"
      },
      "created": "2022-09-22T11:44:11.4879608+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2318",
      "envName": "at22",
      "build": {
        "id": "537170",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-22T09:48:14.5575986Z",
        "finished": "2022-09-22T09:48:59.4894669Z"
      },
      "created": "2022-09-22T09:47:38.2819426+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2318",
      "envName": "at22",
      "build": {
        "id": "537055",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-22T07:47:22.6081547Z",
        "finished": "2022-09-22T07:48:06.4188689Z"
      },
      "created": "2022-09-22T07:47:04.6994635+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2318",
      "envName": "at22",
      "build": {
        "id": "536285",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-21T07:06:11.0422506Z",
        "finished": "2022-09-21T07:08:35.7714067Z"
      },
      "created": "2022-09-21T07:05:56.3600549+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2318",
      "envName": "at22",
      "build": {
        "id": "536282",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-21T07:01:52.6794644Z",
        "finished": "2022-09-21T07:02:35.8360201Z"
      },
      "created": "2022-09-21T07:01:36.7477294+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2318",
      "envName": "at22",
      "build": {
        "id": "535780",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-20T14:37:00.4939384Z",
        "finished": "2022-09-20T14:37:48.6346664Z"
      },
      "created": "2022-09-20T14:36:43.1279864+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2318",
      "envName": "at22",
      "build": {
        "id": "535492",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-20T08:39:05.9299203Z",
        "finished": "2022-09-20T08:40:10.4382208Z"
      },
      "created": "2022-09-20T08:38:48.2332326+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2317",
      "envName": "at22",
      "build": {
        "id": "534872",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-19T12:40:11.5155395Z",
        "finished": "2022-09-19T12:41:04.3950793Z"
      },
      "created": "2022-09-19T12:39:51.6300897+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2316",
      "envName": "at22",
      "build": {
        "id": "534812",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-19T11:36:34.689721Z",
        "finished": "2022-09-19T11:37:08.3221698Z"
      },
      "created": "2022-09-19T11:34:08.883885+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2315",
      "envName": "at22",
      "build": {
        "id": "534786",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-19T11:18:19.3173541Z",
        "finished": "2022-09-19T11:19:02.9152557Z"
      },
      "created": "2022-09-19T11:18:04.4713261+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2314",
      "envName": "at22",
      "build": {
        "id": "534635",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-19T08:23:56.874618Z",
        "finished": "2022-09-19T08:24:41.5385629Z"
      },
      "created": "2022-09-19T08:23:39.4615199+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2313",
      "envName": "at22",
      "build": {
        "id": "531988",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-15T18:00:02.2808774Z",
        "finished": "2022-09-15T18:00:37.7026793Z"
      },
      "created": "2022-09-15T17:59:46.5931298+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2312",
      "envName": "at22",
      "build": {
        "id": "531753",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-15T12:07:22.8914803Z",
        "finished": "2022-09-15T12:08:07.2089719Z"
      },
      "created": "2022-09-15T12:06:54.6474781+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2311",
      "envName": "at22",
      "build": {
        "id": "531688",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-15T10:41:39.5944259Z",
        "finished": "2022-09-15T10:42:13.0678219Z"
      },
      "created": "2022-09-15T10:41:23.9048556+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2310",
      "envName": "at22",
      "build": {
        "id": "531628",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-15T09:44:14.0076131Z",
        "finished": "2022-09-15T09:44:57.4372246Z"
      },
      "created": "2022-09-15T09:43:57.5150901+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2308",
      "envName": "at22",
      "build": {
        "id": "531608",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-15T09:23:04.2722218Z",
        "finished": "2022-09-15T09:23:39.0364173Z"
      },
      "created": "2022-09-15T09:22:48.1170367+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2308",
      "envName": "at22",
      "build": {
        "id": "531390",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-15T06:44:33.1831599Z",
        "finished": "2022-09-15T06:45:07.8434039Z"
      },
      "created": "2022-09-15T06:44:17.663112+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2306",
      "envName": "at22",
      "build": {
        "id": "531381",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-15T06:40:10.0886868Z",
        "finished": "2022-09-15T06:40:45.0065515Z"
      },
      "created": "2022-09-15T06:39:53.8271339+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2306",
      "envName": "at22",
      "build": {
        "id": "530792",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-14T11:39:42.560515Z",
        "finished": "2022-09-14T11:40:28.1852303Z"
      },
      "created": "2022-09-14T11:39:26.2889549+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2305",
      "envName": "at22",
      "build": {
        "id": "530364",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-13T23:11:40.8609298Z",
        "finished": "2022-09-13T23:12:44.8327202Z"
      },
      "created": "2022-09-13T23:11:20.8470811+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2303",
      "envName": "at22",
      "build": {
        "id": "529857",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-13T08:43:47.56102Z",
        "finished": "2022-09-13T08:44:24.0546565Z"
      },
      "created": "2022-09-13T08:43:30.3519792+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2303",
      "envName": "at22",
      "build": {
        "id": "529141",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-12T10:36:45.915312Z",
        "finished": "2022-09-12T10:37:41.0194259Z"
      },
      "created": "2022-09-12T10:36:29.5449911+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2302",
      "envName": "at22",
      "build": {
        "id": "529002",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-12T07:30:35.626922Z",
        "finished": "2022-09-12T07:31:49.0493945Z"
      },
      "created": "2022-09-12T07:30:15.5762585+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2301",
      "envName": "at22",
      "build": {
        "id": "527170",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-09T14:56:29.8482893Z",
        "finished": "2022-09-09T14:57:13.8188578Z"
      },
      "created": "2022-09-09T14:56:12.6764661+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2299",
      "envName": "at22",
      "build": {
        "id": "527027",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-09T11:17:48.8005936Z",
        "finished": "2022-09-09T11:18:34.0037826Z"
      },
      "created": "2022-09-09T11:17:32.7842347+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2299",
      "envName": "at22",
      "build": {
        "id": "526202",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-08T12:26:18.1870672Z",
        "finished": "2022-09-08T12:27:25.2463745Z"
      },
      "created": "2022-09-08T12:26:01.0150013+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2298",
      "envName": "at22",
      "build": {
        "id": "526189",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-08T12:14:43.9736424Z",
        "finished": "2022-09-08T12:15:30.3105239Z"
      },
      "created": "2022-09-08T12:14:27.4680977+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2295",
      "envName": "at22",
      "build": {
        "id": "526054",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-08T09:38:58.1060744Z",
        "finished": "2022-09-08T09:39:42.4134005Z"
      },
      "created": "2022-09-08T09:38:39.041915+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2295",
      "envName": "at22",
      "build": {
        "id": "525919",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-08T08:36:27.7183433Z",
        "finished": "2022-09-08T08:37:22.4394885Z"
      },
      "created": "2022-09-08T08:36:10.158889+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2295",
      "envName": "at22",
      "build": {
        "id": "525320",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-07T13:12:08.588818Z",
        "finished": "2022-09-07T13:12:53.1794402Z"
      },
      "created": "2022-09-07T13:11:51.2443442+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2293",
      "envName": "at22",
      "build": {
        "id": "525243",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-07T11:56:52.6830491Z",
        "finished": "2022-09-07T11:57:57.5787012Z"
      },
      "created": "2022-09-07T11:56:35.1092652+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2293",
      "envName": "at22",
      "build": {
        "id": "525140",
        "status": "completed",
        "result": "failed",
        "started": "2022-09-07T10:15:13.0976556Z",
        "finished": "2022-09-07T10:18:36.6834469Z"
      },
      "created": "2022-09-07T10:14:56.3129297+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2292",
      "envName": "at22",
      "build": {
        "id": "524940",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-07T05:56:02.2054092Z",
        "finished": "2022-09-07T05:56:35.2454212Z"
      },
      "created": "2022-09-07T05:55:47.8028715+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2291",
      "envName": "at22",
      "build": {
        "id": "523604",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-05T13:36:26.5142535Z",
        "finished": "2022-09-05T13:37:01.7598761Z"
      },
      "created": "2022-09-05T13:36:09.3950692+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2289",
      "envName": "at22",
      "build": {
        "id": "520539",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-01T14:10:23.4887092Z",
        "finished": "2022-09-01T14:11:08.4255241Z"
      },
      "created": "2022-09-01T14:10:06.3923213+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2289",
      "envName": "at22",
      "build": {
        "id": "520356",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-01T11:07:44.3215017Z",
        "finished": "2022-09-01T11:08:28.39185Z"
      },
      "created": "2022-09-01T11:07:27.5310498+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2288",
      "envName": "at22",
      "build": {
        "id": "520260",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-01T08:58:56.4595239Z",
        "finished": "2022-09-01T08:59:32.7359183Z"
      },
      "created": "2022-09-01T08:58:40.7831646+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2285",
      "envName": "at22",
      "build": {
        "id": "520155",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-09-01T07:32:41.3568703Z",
        "finished": "2022-09-01T07:33:25.3574189Z"
      },
      "created": "2022-09-01T07:32:25.3624501+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2285",
      "envName": "at22",
      "build": {
        "id": "518742",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-08-30T11:51:17.4504207Z",
        "finished": "2022-08-30T11:51:54.7177468Z"
      },
      "created": "2022-08-30T11:51:00.1105351+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2285",
      "envName": "at22",
      "build": {
        "id": "517949",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-08-29T12:49:31.9673788Z",
        "finished": "2022-08-29T12:50:05.8728998Z"
      },
      "created": "2022-08-29T12:49:15.1531103+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2282",
      "envName": "at22",
      "build": {
        "id": "517763",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-08-29T08:34:28.6096558Z",
        "finished": "2022-08-29T08:35:04.3341809Z"
      },
      "created": "2022-08-29T08:34:12.9164673+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2282",
      "envName": "at22",
      "build": {
        "id": "515631",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-08-26T07:43:34.1982784Z",
        "finished": "2022-08-26T07:44:13.0527997Z"
      },
      "created": "2022-08-26T07:43:19.0246635+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2282",
      "envName": "at22",
      "build": {
        "id": "514968",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-08-25T11:50:55.9179035Z",
        "finished": "2022-08-25T11:51:52.0094522Z"
      },
      "created": "2022-08-25T11:47:47.66125+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2281",
      "envName": "at22",
      "build": {
        "id": "514121",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-08-24T11:16:30.82017Z",
        "finished": "2022-08-24T11:17:06.259775Z"
      },
      "created": "2022-08-24T11:16:16.8849577+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2279",
      "envName": "at22",
      "build": {
        "id": "514033",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-08-24T09:49:50.7025615Z",
        "finished": "2022-08-24T09:50:45.3355486Z"
      },
      "created": "2022-08-24T09:49:35.3209138+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2279",
      "envName": "at22",
      "build": {
        "id": "514006",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-08-24T09:20:27.7675859Z",
        "finished": "2022-08-24T09:21:15.1618834Z"
      },
      "created": "2022-08-24T09:20:10.4051164+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2278",
      "envName": "at22",
      "build": {
        "id": "509385",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-08-18T11:29:57.3073876Z",
        "finished": "2022-08-18T11:30:44.7928412Z"
      },
      "created": "2022-08-18T11:29:35.8444405+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2273",
      "envName": "at22",
      "build": {
        "id": "483311",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-07-15T07:56:09.5035599Z",
        "finished": "2022-07-15T07:56:44.5604091Z"
      },
      "created": "2022-07-15T07:55:29.7350442+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2273",
      "envName": "at22",
      "build": {
        "id": "483268",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-07-15T07:33:06.0498762Z",
        "finished": "2022-07-15T07:33:43.6130964Z"
      },
      "created": "2022-07-15T07:30:34.046494+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2270",
      "envName": "at22",
      "build": {
        "id": "482686",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-07-14T13:39:16.244875Z",
        "finished": "2022-07-14T13:39:55.229031Z"
      },
      "created": "2022-07-14T13:38:59.7132739+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2270",
      "envName": "at22",
      "build": {
        "id": "476009",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-07-06T07:03:47.8191518Z",
        "finished": "2022-07-06T07:04:25.6781626Z"
      },
      "created": "2022-07-06T07:03:31.595951+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2270",
      "envName": "at22",
      "build": {
        "id": "471855",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-06-30T13:21:05.571578Z",
        "finished": "2022-06-30T13:22:01.5307878Z"
      },
      "created": "2022-06-30T13:20:48.5969985+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2269",
      "envName": "at22",
      "build": {
        "id": "465387",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-06-22T10:42:44.12672Z",
        "finished": "2022-06-22T10:43:43.2274465Z"
      },
      "created": "2022-06-22T10:42:26.9771267+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2268",
      "envName": "at22",
      "build": {
        "id": "464723",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-06-21T16:01:55.083484Z",
        "finished": "2022-06-21T16:02:37.9159703Z"
      },
      "created": "2022-06-21T16:01:20.4958567+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2267",
      "envName": "at22",
      "build": {
        "id": "449402",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-06-03T07:18:40.2285283Z",
        "finished": "2022-06-03T07:19:34.6457098Z"
      },
      "created": "2022-06-03T07:18:24.6859277+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2266",
      "envName": "at22",
      "build": {
        "id": "439140",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-05-20T13:24:34.4560879Z",
        "finished": "2022-05-20T13:25:21.1537153Z"
      },
      "created": "2022-05-20T13:24:17.9523633+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2263",
      "envName": "at22",
      "build": {
        "id": "438835",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-05-20T06:29:52.4890416Z",
        "finished": "2022-05-20T06:30:46.7904145Z"
      },
      "created": "2022-05-20T06:29:36.4241647+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2263",
      "envName": "at22",
      "build": {
        "id": "438327",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-05-19T13:53:02.6731331Z",
        "finished": "2022-05-19T13:54:05.1601215Z"
      },
      "created": "2022-05-19T13:52:45.7281575+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2262",
      "envName": "at22",
      "build": {
        "id": "438119",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-05-19T11:21:11.7423501Z",
        "finished": "2022-05-19T11:22:09.5739936Z"
      },
      "created": "2022-05-19T11:20:55.5164014+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2261",
      "envName": "at22",
      "build": {
        "id": "437927",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-05-19T08:20:50.7627351Z",
        "finished": "2022-05-19T08:21:35.5092389Z"
      },
      "created": "2022-05-19T08:20:34.7867723+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2260",
      "envName": "at22",
      "build": {
        "id": "437067",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-05-18T09:25:08.3048594Z",
        "finished": "2022-05-18T09:25:59.8214812Z"
      },
      "created": "2022-05-18T09:24:48.3560266+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2259",
      "envName": "at22",
      "build": {
        "id": "427384",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-05-06T13:06:40.2064812Z",
        "finished": "2022-05-06T13:07:25.94066Z"
      },
      "created": "2022-05-06T13:06:23.4651261+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2257",
      "envName": "at22",
      "build": {
        "id": "426435",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-05-05T11:45:52.9617315Z",
        "finished": "2022-05-05T11:46:48.6970983Z"
      },
      "created": "2022-05-05T11:45:34.4721724+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2257",
      "envName": "at22",
      "build": {
        "id": "424430",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-05-03T09:10:38.0189586Z",
        "finished": "2022-05-03T09:11:23.2478303Z"
      },
      "created": "2022-05-03T09:10:23.6325328+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2256",
      "envName": "at22",
      "build": {
        "id": "424424",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-05-03T09:06:29.7563444Z",
        "finished": "2022-05-03T09:07:15.1917323Z"
      },
      "created": "2022-05-03T09:06:13.025399+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2255",
      "envName": "at22",
      "build": {
        "id": "421804",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-04-29T06:59:22.6299034Z",
        "finished": "2022-04-29T07:00:06.3974803Z"
      },
      "created": "2022-04-29T06:59:08.734162+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2254",
      "envName": "at22",
      "build": {
        "id": "421309",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-04-28T12:19:37.0049435Z",
        "finished": "2022-04-28T12:20:29.9694076Z"
      },
      "created": "2022-04-28T12:19:16.1664836+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2253",
      "envName": "at22",
      "build": {
        "id": "419450",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-04-26T11:02:43.9625743Z",
        "finished": "2022-04-26T11:03:33.7599187Z"
      },
      "created": "2022-04-26T11:02:26.1413694+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2253",
      "envName": "at22",
      "build": {
        "id": "414040",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-04-19T12:59:27.8125404Z",
        "finished": "2022-04-19T13:00:33.4276816Z"
      },
      "created": "2022-04-19T12:59:10.2772455+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2250",
      "envName": "at22",
      "build": {
        "id": "411678",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-04-11T12:31:59.1041324Z",
        "finished": "2022-04-11T12:33:04.3594496Z"
      },
      "created": "2022-04-11T12:31:43.0842064+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2250",
      "envName": "at22",
      "build": {
        "id": "403945",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-03-31T13:42:21.828064Z",
        "finished": "2022-03-31T13:43:21.2484537Z"
      },
      "created": "2022-03-31T13:42:06.0887871+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2249",
      "envName": "at22",
      "build": {
        "id": "403683",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-03-31T09:20:28.3610945Z",
        "finished": "2022-03-31T09:21:15.4395243Z"
      },
      "created": "2022-03-31T09:20:11.9771702+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2248",
      "envName": "at22",
      "build": {
        "id": "403650",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-03-31T08:54:50.5593209Z",
        "finished": "2022-03-31T08:55:38.38842Z"
      },
      "created": "2022-03-31T08:54:31.358206+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2247",
      "envName": "at22",
      "build": {
        "id": "403562",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-03-31T07:12:14.05983Z",
        "finished": "2022-03-31T07:13:12.3359092Z"
      },
      "created": "2022-03-31T07:11:58.9560427+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2246",
      "envName": "at22",
      "build": {
        "id": "402922",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-03-30T11:38:15.2936038Z",
        "finished": "2022-03-30T11:39:02.712492Z"
      },
      "created": "2022-03-30T11:37:59.8320185+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2245",
      "envName": "at22",
      "build": {
        "id": "401908",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-03-29T11:35:45.6069616Z",
        "finished": "2022-03-29T11:36:41.8993235Z"
      },
      "created": "2022-03-29T11:35:29.1694754+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2244",
      "envName": "at22",
      "build": {
        "id": "401895",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-03-29T11:29:05.4729105Z",
        "finished": "2022-03-29T11:29:53.0714879Z"
      },
      "created": "2022-03-29T11:28:45.5570351+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2242",
      "envName": "at22",
      "build": {
        "id": "401881",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-03-29T11:19:18.0740769Z",
        "finished": "2022-03-29T11:20:07.6031709Z"
      },
      "created": "2022-03-29T11:19:00.9068091+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    },
    {
      "tagName": "2242",
      "envName": "at22",
      "build": {
        "id": "401584",
        "status": "completed",
        "result": "succeeded",
        "started": "2022-03-29T07:36:03.9863272Z",
        "finished": "2022-03-29T07:36:58.257529Z"
      },
      "created": "2022-03-29T07:35:33.5571794+00:00",
      "createdBy": "AutoTest",
      "app": "autodeploy-v3",
      "org": "ttd"
    }
  ]
}
`;

const deployments = JSON.parse(deploymentsString);

export const mockDeployments: IDeployment[] = deployments.results.map((deployment) => ({
  ...deployment,
  id: deployment.build.id,
  deployedInEnv: false,
}));
