import jsTPS_Transaction from "../../common/jsTPS.js"
/**
 * AddingSong_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author ?
 */
export default class AddingSong_Transaction extends jsTPS_Transaction {
    constructor(initModel) {
        super();
        this.model = initModel;
    }

    doTransaction() {
        this.model.addButton();
    }

    undoTransaction() {
        this.model.deleteTheLastSong();
    }
}