/* eslint "no-undef": 0 */

const expect = require('expect');
const request = require('supertest');

const { app } = require('../server');

describe('/repositories', () => {
    it('should get repositories successfully after passing valid query', (done) => {
        const query = 'tetris';

        request(app)
            .get(`/repositories?q=${query}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.details.length).toBe(30);
            })
            .end(done);
    });

    it('should not get repositories after passing empty query', (done) => {
        const query = '';

        request(app)
            .get(`/repositories?q=${query}`)
            .expect(500)
            .end(done);
    });
});

describe('/bookmarks - adding and fetching bookmarks', () => {
    const id = 3409938;
    it('should add bookmark successfully after passing valid id', (done) => {
        request(app)
            .post(`/bookmarks/${id}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.status).toBe('OK');
            })
            .end(done);
    });

    it('should not add bookmark after passing invalid id', (done) => {
        const invalidId = 321312312312312312;

        request(app)
            .post(`/bookmarks/${invalidId}`)
            .expect(500)
            .end(done);
    });

    it('should get all bookmarks successfully', (done) => {
        request(app)
            .get('/bookmarks')
            .expect(200)
            .expect((res) => {
                expect(res.body.length).toBe(1);
                expect(res.body[0].id).toBe(id);
            })
            .end(done);
    });

    it('should not allow to add the same bookmark', (done) => {
        request(app)
            .post(`/bookmarks/${id}`)
            .expect(409)
            .expect((res) => {
                expect(res.body.error).toBe('Repository already bookmarked');
            })
            .end(done);
    });


    it('should get the same number of bookmarks', (done) => {
        request(app)
            .get('/bookmarks')
            .expect(200)
            .expect((res) => {
                expect(res.body.length).toBe(1);
                expect(res.body[0].id).toBe(id);
            })
            .end(done);
    });
});

describe('/bookmarks - deleting and fetching bookmarks', () => {
    it('should delete bookmark successfully', (done) => {
        const id = 3409938;

        request(app)
            .delete(`/bookmarks/${id}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.length).toBe(0);
            })
            .end(done);
    });

    it('should not get any bookmark after deletion', (done) => {
        request(app)
            .get('/bookmarks')
            .expect(200)
            .expect((res) => {
                expect(res.body.length).toBe(0);
            })
            .end(done);
    });
});
