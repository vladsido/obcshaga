import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from '../students/student.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectRepository(Student)
        private studentsRepository: Repository<Student>,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'NtekQ5tdwAJkzeC0gtsbVdea2upEIauT4GBTBxzAGRFymUNeXVT1MCNMZdAQ027HtJIQCxUhFzdEVUteLd8cixvKsjKYvaiGMx1eGqaXuNazx4MtuTEq1Zm2JSC0zidYc6sQNzXVCPY1LvkVEo6WLJuTlsck62lXisEHq5ZQPUapRyfzu4zop7GRfQ9k9uTckGvR9aSD6XYJHWBY5auZPWIfriqVyk5ewF65x4rd0hi4uWHhLMFz21olfbDgQUPDWFByQtqVNPaevwiTg7PRwOR7weSOeLa5eVUkOU979ka7mht4cO49L8DIxsWcJeobc8AOQCPejrstVQcztruVXixfIyW79Ci0qeLbLbcuBvJd10VDgFBcBPYGHaNL8gLPmx3fq13qjfu5Vmmsag6FlVHUSva8L3CFvHGGYCeCfMfDrBzI28r0xdJTYPIZ5i1GiTo0WnIg7IWdLxv7OmWEik19aEDSBAtoomVgI77GwcaMBXcSTGn69uvNfwyku38E',
        });
    }

    async validate(payload: any): Promise<Student> {
        return this.studentsRepository.findOne({ where: { id: payload.sub } });
    }
}
