import './css/App.css';
import unityLogo from './images/unityLogo.png';
import neo4jLogo from './images/neo4j_logo.png';

type Certificate = {
  title: string;
  description: string;
  issued: string;
  credentialId?: string;
  verificationUrl: string;
  verificationLabel?: string;
};

type CertificateGroup = {
  issuer: string;
  logo?: string;
  initials?: string;
  certificates: Certificate[];
};

// Replace the example verification URLs with the real credential links when available.
const certificateGroups: CertificateGroup[] = [
{
    issuer: 'Bonnier Akademi',
    initials: 'BA',
    certificates: [
      {
        title: 'Claude Code – Build Digital Tools with AI Agents',
        description: 'Skills: Claude Code',
        issued: 'Apr 2026',
        credentialId: '532488',
        verificationUrl: 'https://true.bonnierakademi.se/kursintyg-zmv9r-anton-lindstrom-337161-1278/?ref=linkedin-profile&zone=true_06&lang=se',
      },
    ],
  },
  {
    issuer: 'Unity',
    logo: unityLogo,
    certificates: [
      {
        title: 'Unity Essentials',
        description: 'Skills: Unity, C# and game development fundamentals',
        issued: 'Aug 2026',
        verificationUrl: 'https://www.credly.com/badges/986b0b08-8fb7-4b3c-94f7-fa8118a61a81/linked_in_profile',
      },
    ],
  },
  {
    issuer: 'Neo4j',
    logo: neo4jLogo,
    certificates: [
      {
        title: 'Neo4j Certificates & AI Workshops',
        description: 'Neo4j Fundamentals · Importing Data into Neo4j · Neo4j and Generative AI · Introduction to Graph Databases',
        issued: 'Feb 2026',
        verificationUrl: 'https://graphacademy.neo4j.com/c/93cd633b-dc95-4d8b-91bc-c4da65236b3d',
        verificationLabel: 'Verify credentials',
      },
    ],
  },
];

const Certificates = () => (
  <section className='certificates' aria-labelledby='certificates-title'>
    <div className='certificates--heading'>
      <h4 id='certificates-title'>Certificates</h4>
      <p>Selected learning and credentials</p>
    </div>

    <div className='certificates--grid'>
      {certificateGroups.map((group, groupIndex) => (
        <article className='certificate-card' key={`${group.issuer}-${groupIndex}`}>
          <div className='certificate-card--organization'>
            {group.logo ? (
              <img src={group.logo} alt='' />
            ) : (
              <span className='certificate-card--brand-placeholder' aria-hidden='true'>{group.initials}</span>
            )}
            <h5>{group.issuer}</h5>
          </div>
          {group.certificates.map((certificate, certificateIndex) => (
            <div className='certificate-entry' key={`${certificate.title}-${certificateIndex}`}>
              <div className='certificate-card--content'>
                <h6>{certificate.title}</h6>
                <p className='certificate-card--issued'>Issued {certificate.issued}</p>
                {certificate.credentialId && <p className='certificate-card--id'>Credential ID: {certificate.credentialId}</p>}
                <p className='certificate-card--description'>{certificate.description}</p>
                <a className='certificate-card--verification' href={certificate.verificationUrl} target='_blank' rel='noreferrer'>
                  {certificate.verificationLabel || 'Verify certificate'} <span aria-hidden='true'>↗</span>
                </a>
              </div>
            </div>
          ))}
        </article>
      ))}
    </div>
  </section>
);

export default Certificates;