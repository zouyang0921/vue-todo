import '../assets/styles/footer.less';

export default {
    data () {
        return {
            author: 'zouyang'
        };
    },
    render () {
        return (
            <div id="footer">
                <span>Written by {this.author}</span>
            </div>
        );
    }
};
