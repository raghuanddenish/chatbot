from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

# Set up the OpenAI API credentials
openai.api_key = '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'

@app.route('/chatbot', methods=['POST'])
def chatbot():
    user_input = request.json['message']

    # Call the OpenAI API to generate a response
    response = openai.Completion.create(
        engine='davinci',
        prompt=user_input,
        max_tokens=50,
        n=1,
        stop=None,
        temperature=0.7
    )

    bot_response = response.choices[0].text.strip()

    return jsonify({'response': bot_response})

if __name__ == '__main__':
    app.run()
