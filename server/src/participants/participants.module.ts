import { Module } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { Services } from '../utils/constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Participant } from '../utils/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Participant])],
  providers: [
    {
      provide: Services.PARTICIPANT,
      useClass: ParticipantService,
    },
  ],
  exports: [
    {
      provide: Services.PARTICIPANT,
      useClass: ParticipantService,
    },
  ],
})
export class ParticipantsModule {}
