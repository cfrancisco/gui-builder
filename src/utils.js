class Util {
    static sid() {
        return (1 + Math.random() * 429496729125).toFixed().toString();
    }
}

export default Util;
