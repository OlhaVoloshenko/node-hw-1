const { Command } = require("commander");

const contacts = require("./contacts.js");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.log(allContacts);
      break;
    case "get":
      const oneContact = await contacts.getContactById(id);
      console.log(oneContact);
      break;
    case "add":
      const addNewContact = await contacts.addContact({ name, email, phone });
      console.log(addNewContact);
      break;

    case "remove":
      const dellContact = await contacts.removeContact(id);
      console.log(dellContact);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
      break;
  }
};

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);
const argv = program.opts();
invokeAction(argv);
