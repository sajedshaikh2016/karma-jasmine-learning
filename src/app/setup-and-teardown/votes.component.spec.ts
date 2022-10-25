import { VoteComponent } from "./vote.component";

describe('VoteComponent', () => {
    beforeEach(() => {
        // set up
    });

    afterEach(() => {
        // tear down
    });

    beforeAll(() => {

    });

    afterAll(() => {

    });


    it('should increment totalVotes when upvoted', () => {
        // Arrange
        let component = new VoteComponent();

        // Act
        component.upVotes();

        // Assert
        expect(component.totalVotes).toBe(1);
    });

    it('should decrement totalVotes when downvoted', () => {
        // Arrange
        let component = new VoteComponent();

        // Act
        component.downVotes()

        // Assert
        expect(component.totalVotes).toBe(-1);
    });


});