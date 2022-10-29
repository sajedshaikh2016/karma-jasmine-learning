import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

import { DataService } from './data.service';
import { Post } from './model/posts.model';

describe('DataService', () => {
    let service: DataService;
    let httpClientSpy: jasmine.SpyObj<HttpClient>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [DataService]
        });
        service = TestBed.inject(DataService);
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        service = new DataService(httpClientSpy);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return expected posts (HttpClient called once)', (done: DoneFn) => {
        const dummyPosts: Post[] = [{
            userId: '1',
            id: 1,
            body: 'Hello world',
            title: 'Testing angular'
        },
        {
            userId: '2',
            id: 2,
            body: 'Hello world',
            title: 'Testing angular'
        }];

        httpClientSpy.get.and.returnValue(of(dummyPosts));

        service.getPosts().subscribe({
            next: posts => {
                expect(posts.length)
                    .toBe(2);
                expect(posts)
                    .toEqual(dummyPosts);
                done();
            },
            error: done.fail
        });
        expect(httpClientSpy.get.calls.count())
            .withContext('one call')
            .toBe(1);
    });



    // it('should return an error when the server returns a 404', (done: DoneFn) => {
    //     const errorResponse = new HttpErrorResponse({
    //         error: 'test 404 error',
    //         status: 404, statusText: 'Not Found'
    //     });

    //     httpClientSpy.get.and.returnValue(asyncError(errorResponse));

    //     service.getPosts().subscribe({
    //         next: posts => done.fail('expected an error, not heroes'),
    //         error: error => {
    //             expect(error.message).toContain('test 404 error');
    //             done();
    //         }
    //     });
    // });


});

