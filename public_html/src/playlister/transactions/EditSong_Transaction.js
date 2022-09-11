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
export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initModel, initOT, initOA, initOId, initNTitle, initNArtist, initNid, initIndex) {
        super();
        this.model = initModel;
        this.oT = initOT;
        this.oA = initOA;
        this.oId = initOId;
        //---->
        this.nTitle = initNTitle;
        this.nArtist = initNArtist;
        this.nId = initNid;
        this.ii = initIndex;
    }

    doTransaction() {
        this.model.setNewSong(this.nTitle, this.nArtist, this.nId, this.ii);
    }

    undoTransaction() {
        this.model.setNewSong(this.oT, this.oA, this.oId, this.ii);
    }
}