import { Identity } from './types/id.type';
import { config } from 'dotenv';

config();

// singleton은 인스턴스를 하나만 생성함으로써 메모리와 속도면에서 유리하다
export class Singleton {

  // Singlton이라는 인스턴스 생성
  private static instance: Singleton;

  // identifying은 전송된 회원가입 신청 정보를 객체로
  private identifying: Identity;

  // 처리하기 위해 큐에 집어넣고
  private que: string[];

  // 생정자 정의
  private constructor() {
    this.identifying = {
      id: process.env.ID,
      email: process.env.EMAIL,
      private: process.env.PRIVATE,
    };

    this.que = [];
  }

  // 끌어올 인스턴스
  public static getInstance() {
    if (!this.getInstance) {
      this.instance = new Singleton();
    }

    return this.instance;
  }

  public start() {
    console.log('The service is Started');
    
    try {
      if (this.identifying.id.length > 2) {
        console.log('The ID is length is confirmed');
      } if (!this.identifying.private) {
        console.log('The password is not exist');
        this.que.push(this.identifying.id);
      }
      return this.que;

    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
    }
  }
}
