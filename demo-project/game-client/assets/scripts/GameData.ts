
export interface PaddleAttribute {
    paddle_width: number,
    paddle_count: number,
    ball_count: number,
}


export enum PlayMode {
    STAGE = 0,
    INFINITE,
}

export const STAGE_MAX = 20;

export class GameData {

    private static instance: GameData = null;

    private playMode: PlayMode = PlayMode.STAGE;
    private curStage = 0;
    private earnToken = 0;

    private paddleAttr: PaddleAttribute;
    private serverData: any;
    private password: string = null;
    
    private isTutorial = false;
    private tutorialStage = 0;
    private tutorialStep = 0;
    private tutorialAddress: string = null;
    private tutorialMnemonic: string = null;
    

    public static getInstance(): GameData {
        if(GameData.instance === null) {
            GameData.instance = new GameData();
        }

        return GameData.instance
    }

    public getPlayMode(): PlayMode {
        return this.playMode;
    }
    public setPlayMode(mode: PlayMode) {
        this.playMode = mode;
    }

    public setPaddleAttr(data: any[]) {
        this.paddleAttr = {paddle_width: 100, paddle_count: 1, ball_count: 3};
        if(data.length > 0) {
            data.forEach(v => {
                switch(v.trait_type) {
                    case 'paddle_width':
                        this.paddleAttr.paddle_width = parseInt(v.value);
                        break;
                    case 'paddle_count':
                        this.paddleAttr.paddle_count = parseInt(v.value);
                        break;
                    case 'ball_count':
                        this.paddleAttr.ball_count = parseInt(v.value);
                        break;
                }
            })
        }
    }

    public getPaddleAttr(): PaddleAttribute {
        return this.paddleAttr;
    }

    public setServerData(data: any) {
        this.serverData = data;
    }
    public getServerData(): any {
        return this.serverData;
    }

    public setPassword(pw: string) {
        this.password = pw;
    }
    public getPassword(): string {
        return this.password;
    }

    public getCurStage(): number {
        return this.curStage;
    }
    public setCurStage(stage: number) {
        this.curStage = stage;
    }

    public nextStage() {
        if(this.getCurStage() < STAGE_MAX) {
            let next_stage = this.getCurStage() + 1;
            this.curStage = next_stage;
        }
    }

    public getEarnedToken(): number {
        return this.earnToken;
    }
    public setEarnedToken(token: number) {
        this.earnToken = token;
    }
    public addEarnedToken(token: number): number {
        this.earnToken += token;
        return this.earnToken;
    }

    get tutorial(): boolean {
        return this.isTutorial;
    }
    set tutorial(tf: boolean) {
        this.isTutorial = tf;
    }

    initTutorial() {
        this.isTutorial = true;
        this.tutorialStage = 1;
        this.tutorialStep = 0;
        this.playMode = PlayMode.STAGE;
        this.earnToken = 0;
        this.setPaddleAttr([]);
    }

    getTutorialStage(): number {
        return this.tutorialStage;
    }
    setTutorialStage(stage: number) {
        this.tutorialStage = stage;
    }

    getTutorialStep() : number {
        return this.tutorialStep;
    }
    setTutorialStep(step: number) {
        this.tutorialStep = step;
    }

    getTutorialAddress(): string {
        return this.tutorialAddress;
    }
    setTutorialAddress(address: string) {
        this.tutorialAddress = address;
    }

    getTutorialMnemonic(): string {
        return this.tutorialMnemonic;
    }
    setTutorialMnemonic(mnemonic: string) {
        this.tutorialMnemonic = mnemonic;
    }

    resetTutorial() {
        this.isTutorial = false;
        this.tutorialStage = 1;
        this.tutorialStep = 0;
    }


}

export const GAMEDATA = GameData.getInstance();