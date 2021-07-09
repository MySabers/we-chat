// const { RSocketClient, JsonSerializer, IdentitySerializer } = require('rsocket-core')
// const RSocketWebsocketClient = require('rsocket-websocket-client').default
// const WebSocket = require('ws')
//
// function createClient (options) {
//   const transportOptions = {
//     url: `ws://${options.host}:${options.port}`,
//     // In non-browser environments we need to provide a
//     // factory method which can return an instance of a
//     // websocket object. Browsers however, have this
//     // functionality built-in.
//     wsCreator: (url) => {
//       return new WebSocket(url)
//     }
//   }
//   const setupOptions = {
//     keepAlive: 1000000,
//     lifetime: 100000,
//     dataMimeType: 'application/json',
//     metadataMimeType: 'application/json',
//     payload: {
//
//     }
//   }
//
//   const serializers = {
//     data: JsonSerializer,
//     metadata: IdentitySerializer
//   }
//   const transport = new RSocketWebsocketClient(transportOptions)
//   const client = new RSocketClient({ setup: setupOptions, transport, serializers })
//   return client.connect()
// }
//
// function run () {
//   return createClient({
//     host: '127.0.0.1',
//     port: 7000
//   })
// }
//
// const client = run()
//
// // Open the connection
// client.subscribe({
//   onComplete: socket => {
//     // socket provides the rsocket interactions fire/forget, request/response,
//     // request/stream, etc as well as methods to close the socket.
//     socket.fireAndForget({
//       data: {some: {json: {value: 1}}},
//       metadata: String.fromCharCode('shell-client'.length) + 'shell-client'
//     })
//   },
//   onError: error => console.error(error),
//   onSubscribe: cancel => { /* call cancel() to abort */ }
// })

/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @flow
 */

const {RSocketClient,
  BufferEncoders,
  encodeCompositeMetadata,
  TEXT_PLAIN,
  MESSAGE_RSOCKET_COMPOSITE_METADATA,
  MESSAGE_RSOCKET_ROUTING,
  MESSAGE_RSOCKET_AUTHENTICATION,
  encodeRoute,
  encodeSimpleAuthMetadata
} = require('rsocket-core')
const RSocketWebSocketClient = require('rsocket-websocket-client').default
const WebSocket = require('ws')

const maxRSocketRequestN = 2147483647
const keepAlive = 60000
const lifetime = 180000
const dataMimeType = 'application/octet-stream'
const metadataMimeType = MESSAGE_RSOCKET_COMPOSITE_METADATA.string
const route = 'test.service'

let client = new RSocketClient({
  setup: {
    dataMimeType,
    keepAlive,
    lifetime,
    metadataMimeType,
    payload: {
      data: undefined,
      metadata: encodeCompositeMetadata([
        // [TEXT_PLAIN, Buffer.from('测试一下')],
        // [MESSAGE_RSOCKET_ROUTING, encodeRoute(route)],
        [
          MESSAGE_RSOCKET_AUTHENTICATION,
          encodeSimpleAuthMetadata('user', 'pass')
        ]
        // ['custom/test/metadata', Buffer.from([1, 2, 3])],
      ])
    }
  },
  transport: new RSocketWebSocketClient(
    {
      debug: true,
      url: 'ws://localhost:7000',
      wsCreator: url => new WebSocket(url)
    },
    BufferEncoders
  )
})

// Open the connection
client.connect().then(
  socket => {
    // observe rsocket status
    // eslint-disable-next-line no-console
    socket.connectionStatus().subscribe(event => console.log(event));
    socket.channel({

    })
    socket
      .requestStream({
        data: Buffer.from('request-stream'),
        metadata: encodeCompositeMetadata([
          [TEXT_PLAIN, Buffer.from('Hello World')],
          [MESSAGE_RSOCKET_ROUTING, encodeRoute(route)],
          [
            MESSAGE_RSOCKET_AUTHENTICATION,
            encodeSimpleAuthMetadata('user', 'pass')
          ],
          ['custom/test/metadata', Buffer.from([1, 2, 3])]
        ])
      })
      .subscribe({
        // eslint-disable-next-line no-console
        onComplete: () => console.log('Request-stream completed'),
        onError: error => console.error(`Request-stream error:${error.message}`),
        // eslint-disable-next-line no-console
        onNext: value => console.log('%s %s', value.data, value.metadata),
        onSubscribe: sub => sub.request(maxRSocketRequestN)
      })
  },
  error => {
    // handle connection error
    // eslint-disable-next-line no-console
    console.log('error:', error)
  }
)
setTimeout(() => {}, 30000000)