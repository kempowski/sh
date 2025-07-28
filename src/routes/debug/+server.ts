// src/routes/debug/+server.ts
import PocketBase from 'pocketbase';

export async function GET() {
  console.log('=== DEBUGGING POCKETBASE IMPORT ===');
  
  try {
    // Try to import and initialize PocketBase
    const pb = new PocketBase('http://localhost');
    
    // Get detailed module information
    const modulePaths = require.main.paths;
    console.log('Node.js module paths:');
    modulePaths.forEach(path => console.log(`- ${path}`));
    
    // Return success response
    return new Response(JSON.stringify({
      status: 'success',
      message: 'PocketBase initialized successfully',
      nodeVersion: process.version,
      modulePaths: modulePaths.length
    }));
  } catch (error) {
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      type: error.constructor.name
    });
    
    return new Response(JSON.stringify({
      status: 'error',
      message: error.message || String(error),
      errorType: error.constructor?.name
    }), { status: 500 });
  }
}