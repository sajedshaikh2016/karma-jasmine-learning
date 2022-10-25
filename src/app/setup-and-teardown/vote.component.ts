export class VoteComponent {
    totalVotes: number = 0;

    upVotes() {
        this.totalVotes++;
    }

    downVotes() {
        this.totalVotes--;
    }
}