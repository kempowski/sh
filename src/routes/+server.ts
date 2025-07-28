import PocketBase from 'pocketbase';

export async function GET() {
  console.log('Attempting to initialize PocketBase...');
  
  try {
    const pb = new PocketBase('http://localhost');
    console.log('PocketBase initialized successfully:', pb);
    return new Response(JSON.stringify({ status: 'success' }));
  } catch (error) {
    console.error('Initialization error:', error);
    return new Response(
      JSON.stringify({
        status: 'error',
        message: error.message || String(error)
      }),
      { status: 500 }
    );
  }
}