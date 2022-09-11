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
export default class RemoveSong_Transaction extends jsTPS_Transaction {
    constructor(initModel, initCSong, initIndex) {
        super();
        this.model = initModel;
        this.cSong = initCSong;
        this.index = initIndex;
    }

    doTransaction() {
        this.model.deleteSongByIndex(this.index);
    }

    undoTransaction() {
        this.model.addSong(this.cSong, this.index);
    }
}