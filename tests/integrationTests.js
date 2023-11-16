```javascript
const request = require('supertest');
const app = require('../server/index.js');

describe('Integration Tests', () => {
  let token;

  beforeAll((done) => {
    request(app)
      .post('/api/auth/login')
      .send({
        email: 'test@test.com',
        password: 'password',
      })
      .end((err, response) => {
        token = response.body.token; 
        done();
      });
  });

  test('testRegistration', () => {
    return request(app)
      .post('/api/auth/register')
      .send({
        name: 'Test User',
        email: 'test@test.com',
        password: 'password',
      })
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });

  test('testLogin', () => {
    return request(app)
      .post('/api/auth/login')
      .send({
        email: 'test@test.com',
        password: 'password',
      })
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });

  test('testPasswordStorage', () => {
    return request(app)
      .post('/api/passwords')
      .set('Authorization', `Bearer ${token}`)
      .send({
        password: 'password',
      })
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });

  test('testPasswordRetrieval', () => {
    return request(app)
      .get('/api/passwords')
      .set('Authorization', `Bearer ${token}`)
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });

  test('testPasswordUpdate', () => {
    return request(app)
      .put('/api/passwords/1')
      .set('Authorization', `Bearer ${token}`)
      .send({
        password: 'newPassword',
      })
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });

  test('testPasswordDeletion', () => {
    return request(app)
      .delete('/api/passwords/1')
      .set('Authorization', `Bearer ${token}`)
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });

  test('testPasswordReset', () => {
    return request(app)
      .post('/api/auth/reset-password')
      .send({
        email: 'test@test.com',
      })
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });

  test('testPasswordSharing', () => {
    return request(app)
      .post('/api/passwords/share')
      .set('Authorization', `Bearer ${token}`)
      .send({
        passwordId: 1,
        shareWith: 'friend@test.com',
      })
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });

  test('testPasswordGeneration', () => {
    return request(app)
      .get('/api/passwords/generate')
      .set('Authorization', `Bearer ${token}`)
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });

  test('testPasswordStrengthChecker', () => {
    return request(app)
      .get('/api/passwords/check-strength')
      .set('Authorization', `Bearer ${token}`)
      .send({
        password: 'password',
      })
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });

  test('testNotifications', () => {
    return request(app)
      .get('/api/notifications')
      .set('Authorization', `Bearer ${token}`)
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });

  test('testMFA', () => {
    return request(app)
      .post('/api/auth/mfa-setup')
      .set('Authorization', `Bearer ${token}`)
      .send({
        secret: 'MFA_SECRET',
      })
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});
```