export class loginclass {

    constructor(page) {
        this.page = page;
        this.username = page.locator('//input[@name="user_name"]');
        this.password = page.locator('//input[@name="user_password"]');
        this.button = page.getByRole('button', { name: 'Login' });
    }

   
  async launchurl(url) {
        await this.page.goto(url);
    }
        
  
    async details(user_name, password) {
        await this.username.fill(user_name);
        await this.password.fill(password);
        await this.button.click();
    }


  
}


//Class → Blueprint (design)
// Object → Real thing created from the class
// new → Creates a new object
// Constructor → Runs automatically when the object is created
// this → Refers to the current object
// Method → A function inside a class
// POM → Store locators and actions in a class so tests stay short, clean, and reusable.