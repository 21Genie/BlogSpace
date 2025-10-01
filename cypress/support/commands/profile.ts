export const updateProfile = () => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.Firstname').clear().type('newFirstname');
    cy.getByTestId('ProfileCard.Lastname').clear().type('newLastname');
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'have' },
        body: {
            id: '4',
            first: 'testuser',
            lastname: 'test',
            age: 22,
            city: 'Moscow',
            username: 'testuser',
            avatar: 'https://i.pinimg.com/originals/b1/cc/99/b1cc9987043f82eda1963ab8ba5d03c5.jpg',
            currency: 'RUB',
            country: 'Russia',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
