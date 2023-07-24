
const  API_KEY  = "aa"
 
export const chat = async ( message: string ) => {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            'model': 'gpt-3.5-turbo',
            'messages': [
                {
                    'role': 'user',
                    'content': `${message}`,
                }
            ],
            'temperature': 0.7,
        })
    });
    // 回答の取得
    const osya = await response.json();
    return osya.choices[0].message.content;
 
  } catch ( error ) {
    console.error( error );
    return null;
  }
}