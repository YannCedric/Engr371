InsertEscapeCharacters = (text)=>{
    escapeSingleQuote = text.replace(/'/g,"\'")
    console.log("escapedString =>",escapeSingleQuote)
    return escapeSingleQuote
}


let ans = InsertEscapeCharacters("hey I'm ribal")
ans 