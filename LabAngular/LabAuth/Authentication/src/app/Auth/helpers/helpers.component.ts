import { Component, OnInit } from '@angular/core';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing'
// @Component({
//   selector: 'app-helpers',
//   templateUrl: './helpers.component.html',
//   styleUrls: ['./helpers.component.css']
// })
// export class HelpersComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

export function fakeBackendFactory(backend: MockBackend,
                                   options: BaseRequestOptions) {
  // let token2 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6dHJ1ZX0.iy8az1ZDe-_hS8GLDKsQKgPHvWpHl0zkQBqy1QIPOkA';
  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6dHJ1ZX0.Uwq0ymYyC59-nrSh8uZ3PepXNY3xzX_ff2k20X5EaNc';
  // let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6ZmFsc2V9.KU_M3P-US1exYSeX5BQHznYynisdu1h60mADP1FoPqM';
  backend.connections.subscribe((connection: MockConnection) => {
    // We are using the setTimeout() function to simulate an
    // asynchronous call to the server that takes 1 second.
    setTimeout(() => {
      //
      // Fake implementation of /api/authenticate
      //
      if (connection.request.url.endsWith('/api/authenticate') &&
        connection.request.method === RequestMethod.Post) {
        let body = JSON.parse(connection.request.getBody());

        if (body.email === 'thai' && body.password === '1234') {
          connection.mockRespond(new Response(
            new ResponseOptions({
              status: 200,
              body: { token: token }
            })));
        } else {
          connection.mockRespond(new Response(
            new ResponseOptions({ status: 200 })
          ));
        }
      }



      //
      // Fake implementation of /api/orders
      //
      if (connection.request.url.endsWith('/api/orders') &&
        connection.request.method === RequestMethod.Get) {
        if (connection.request.headers.get('Authorization') === 'Bearer ' + token) {
          connection.mockRespond(new Response(
            new ResponseOptions({ status: 200, body: [1, 2, 3] })
          ));
        } else {
          connection.mockRespond(new Response(
            new ResponseOptions({ status: 401 })
          ));
        }
      }



    }, 1000);
  });

  return new Http(backend, options);
}
export let fakeBackendProvider = {
  provide: Http,
  useFactory: fakeBackendFactory,
  deps: [MockBackend, BaseRequestOptions]
};
