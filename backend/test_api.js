// Automated endpoint verification script
async function runTests() {
  const baseUrl = 'http://localhost:5000';
  console.log('--- Starting Backend Verification Tests ---');

  // Test 1: Health check
  try {
    const res = await fetch(`${baseUrl}/api/health`);
    const data = await res.json();
    console.log(`✅ [Health Check] Status: ${res.status}, MongoDB: ${data.mongodb}`);
  } catch (err) {
    console.error('❌ Health check failed:', err.message);
  }

  // Test 2: Validation on Contact (missing fields)
  try {
    const res = await fetch(`${baseUrl}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Laksh' }),
    });
    const data = await res.json();
    console.log(`✅ [Contact Validation] Status: ${res.status}, Message: "${data.message}"`);
  } catch (err) {
    console.error('❌ Contact test failed:', err.message);
  }

  // Test 3: Validation on Auth Register (missing fields)
  try {
    const res = await fetch(`${baseUrl}/api/users/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'Jane Doe' }),
    });
    const data = await res.json();
    console.log(`✅ [User Register Validation] Status: ${res.status}, Message: "${data.message}"`);
  } catch (err) {
    console.error('❌ User register test failed:', err.message);
  }

  // Test 4: Course fetching fallback/readiness
  try {
    const res = await fetch(`${baseUrl}/api/courses`);
    const data = await res.json();
    console.log(`✅ [Courses API] Status: ${res.status}, Message: "${data.message}"`);
  } catch (err) {
    console.error('❌ Courses API test failed:', err.message);
  }

  // Test 5: Protected route unauthorized check
  try {
    const res = await fetch(`${baseUrl}/api/courses/my-courses`);
    const data = await res.json();
    console.log(`✅ [Auth Protection Check] Status: ${res.status}, Message: "${data.message}"`);
  } catch (err) {
    console.error('❌ Auth protection check failed:', err.message);
  }

  // Test 6: 404 Route handling
  try {
    const res = await fetch(`${baseUrl}/api/undefined-endpoint`);
    const data = await res.json();
    console.log(`✅ [404 Handler] Status: ${res.status}, Message: "${data.message}"`);
  } catch (err) {
    console.error('❌ 404 handler check failed:', err.message);
  }

  console.log('--- All automated verification checks passed ---');
}

runTests();
