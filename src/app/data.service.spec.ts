import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpTestingController } from '@angular/common/http';

import { DataService } from './data.service';
import { Post } from './model/posts.model';

xdescribe('DataService', () => {
    let service: DataService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [DataService]
        });
        service = TestBed.inject(DataService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should retrive posts from the API via GET', () => {
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


        service.getPosts().subscribe(posts => {
            expect(posts.length).toBe(2);
            expect(posts).toEqual(dummyPosts);
        });

        const request = httpMock.expectOne(`${service.ROOT_URL}/posts`);
        expect(request.request.methor).toBe('GET');
        request.flush(dummyPosts);
    });

});
