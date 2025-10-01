let profileId: string;

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });

    afterEach(() => {
        cy.resetProfile(profileId);
    });

    it('И профиль успешно загружается', () => {
        cy.getByTestId('ProfileCard.Firstname').should(
            'have.value',
            'testuser',
        );
    });

    it('Обновление профиля', () => {
        cy.updateProfile();
        cy.getByTestId('ProfileCard.Firstname').should(
            'have.value',
            'newFirstname',
        );
        cy.getByTestId('ProfileCard.Lastname').should(
            'have.value',
            'newLastname',
        );
    });
});
