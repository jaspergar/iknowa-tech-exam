import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        JwtModule.register({
            secret: 'SECRET', // TODO : Add key to env
            signOptions: { expiresIn: '1d' },
          }),
    ],
    exports: [
        JwtModule
    ]
})
export class CommonModule {}
