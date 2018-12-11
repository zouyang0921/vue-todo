export default {
    updateCount(state, { num1, num2 }) {
        console.log(num2);
        state.count = num1;
    }
};
