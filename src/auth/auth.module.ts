import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { Student } from '../students/student.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Student]),
        PassportModule,
        JwtModule.register({
            secret: 'NtekQ5tdwAJkzeC0gtsbVdea2upEIauT4GBTBxzAGRFymUNeXVT1MCNMZdAQ027HtJIQCxUhFzdEVUteLd8cixvKsjKYvaiGMx1eGqaXuNazx4MtuTEq1Zm2JSC0zidYc6sQNzXVCPY1LvkVEo6WLJuTlsck62lXisEHq5ZQPUapRyfzu4zop7GRfQ9k9uTckGvR9aSD6XYJHWBY5auZPWIfriqVyk5ewF65x4rd0hi4uWHhLMFz21olfbDgQUPDWFByQtqVNPaevwiTg7PRwOR7weSOeLa5eVUkOU979ka7mht4cO49L8DIxsWcJeobc8AOQCPejrstVQcztruVXixfIyW79Ci0qeLbLbcuBvJd10VDgFBcBPYGHaNL8gLPmx3fq13qjfu5Vmmsag6FlVHUSva8L3CFvHGGYCeCfMfDrBzI28r0xdJTYPIZ5i1GiTo0WnIg7IWdLxv7OmWEik19aEDSBAtoomVgI77GwcaMBXcSTGn69uvNfwyku38E',
            signOptions: { expiresIn: '120m' },
        }),
    ],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController],
})
export class AuthModule {}
