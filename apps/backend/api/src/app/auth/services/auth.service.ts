import { ISignAuthPayload, ISignAuthResponse } from '@aiai/shared/data-access/interfaces';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

  login(signInPayload: ISignAuthPayload): Promise<ISignAuthResponse> {
    return
    // {
    //   accessToken: //jwt
    //   expiresIn: //jwt
    //   id: // user service
    // }
  }
}
