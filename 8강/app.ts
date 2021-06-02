const sendGreeting = (message: string, userName = 'there'): string => {
  return message
}

const info: number | string = sendGreeting('Hello');
console.log(info);