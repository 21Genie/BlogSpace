import { selectByTestId } from 'cypress/helpers/selectByTestId';
import { USER_LOCAL_STORAGE_KEY } from '../../../src/shared/const/localStorage';
import { User } from '../../../src/entities/User';

export const login = (username = 'testuser', password = '123') => {
    return cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/login',
            body: {
                username,
                password,
            },
        })
        .then(({ body }) => {
            window.localStorage.setItem(
                USER_LOCAL_STORAGE_KEY,
                JSON.stringify(body),
            );
            return body;
        });
};

export const getByTestId = (testId: string) => {
    return cy.get(selectByTestId(testId));
};

declare global {
    namespace Cypress {
        interface Chainable {
            login(username?: string, password?: string): Chainable<User>;
            getByTestId(testId: string): Cypress.Chainable<JQuery<HTMLElement>>;
        }
    }
}
