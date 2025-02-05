import React from 'react';
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {
  AiAssistantIcon,
  ProjectManagementIcon,
  CodeGenerationIcon,
  TutorialIcon
} from '@site/src/components/AnimatedIcons';
import { HeroAnimation } from '@site/src/components/HeroAnimation';
import { WorkflowAnimation, IssueTrackingAnimation, CodeIntegrationAnimation } from '@site/src/components/SectionAnimations';
import { ChromeIcon, VSCodeIcon } from '@site/src/components/Icons';

import styles from './index.module.css';

function FeatureCard({title, description, link, linkText, icon}: {
  title: string;
  description: string;
  link: string;
  linkText: string;
  icon: React.ReactNode;
}) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link
        className="button button--secondary button--sm"
        to={link}>
        {linkText}
      </Link>
    </div>
  );
}

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className="hero__title">
              AI-Powered Project Management for Modern Development
            </h1>
            <div className={styles.heroMobileAnimation}>
              <HeroAnimation />
            </div>
            <p className="hero__subtitle">
              Seamlessly integrate Jira with your development workflow. Smart issue tracking, 
              AI-assisted descriptions, and code-to-issue traceability - all where you need it.
            </p>
            <div className={styles.headerButtons}>
              <Link 
                className="button button--primary button--lg" 
                to="/docs/vscode-extension/install"
              >
                <VSCodeIcon />
                VSCode Extension
              </Link>
              <Link 
                className="button button--secondary button--lg" 
                to="/docs/chrome-extension/install"
              >
                <ChromeIcon />
                Chrome Extension
              </Link>
            </div>
          </div>
          <div className={styles.heroDesktopAnimation}>
            <HeroAnimation />
          </div>
        </div>
      </div>
    </header>
  );
}

function MainContent() {
  return (
    <div className={styles.mainContent}>
      <section className={styles.mainFeatures}>
        <h2>Use Shippi</h2>
        <div className={styles.featuresGrid}>
          <FeatureCard
            icon={<AiAssistantIcon />}
            title="Chrome Extension"
            description="Quick Jira issue creation and management with AI-powered smart field population and real-time tracking."
            link="/docs/chrome-extension"
            linkText="Learn More"
          />
          <FeatureCard
            icon={<CodeGenerationIcon />}
            title="VSCode Extension"
            description="AI-powered issue management integrated directly in your development workflow with code-to-issue traceability."
            link="/docs/vscode-extension"
            linkText="Start Coding"
          />
          <FeatureCard
            icon={<ProjectManagementIcon />}
            title="AI Assistant"
            description="Natural language processing for issue descriptions with smart suggestions and context-aware enhancements."
            link="/docs/ai-assistant"
            linkText="Explore Features"
          />
        </div>
      </section>

      <section className={styles.workflowSection}>
        <div className={styles.sectionContent}>
          <div className={styles.sectionText}>
            <h2>Streamline Your Development Workflow</h2>
            <p>Development isn't just about coding. It's about managing tasks, tracking progress, and maintaining context across tools. Shippi brings it all together:</p>
            <ul>
              <li>Quick issue creation with AI-powered field suggestions</li>
              <li>Real-time synchronization between Jira and your IDE</li>
              <li>Smart context switching with code-to-issue traceability</li>
            </ul>
            <Link className="button button--primary" to="/docs/workflow">
              Learn About Workflow Integration
            </Link>
          </div>
          <div className={styles.sectionAnimation}>
            <WorkflowAnimation />
          </div>
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className={styles.ctaBannerContent}>
          <div className={styles.ctaBannerText}>
            <h2>Start Building Better Today</h2>
            <p>Join developers who are shipping faster with AI-powered project management</p>
          </div>
          <div className={styles.ctaBannerButtons}>
            <Link 
              className={styles.vscodeButton} 
              to="/docs/vscode-extension/install"
            >
              <VSCodeIcon />
              VSCode Extension
            </Link>
            <Link 
              className={styles.chromeButton} 
              to="/docs/chrome-extension/install"
            >
              <ChromeIcon />
              Chrome Extension
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.aiSection}>
        <div className={styles.sectionContent}>
          <div className={styles.sectionAnimation}>
            <IssueTrackingAnimation />
          </div>
          <div className={styles.sectionText}>
            <h2>AI-Powered Issue Management</h2>
            <p>Let AI handle the cognitive overhead of project management while you focus on coding:</p>
            <ul>
              <li>Natural language processing for smarter issue descriptions</li>
              <li>Automated field population based on context</li>
              <li>Intelligent suggestions for issue linking and relationships</li>
            </ul>
            <Link className="button button--primary" to="/docs/ai-features">
              Explore AI Capabilities
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.integrationSection}>
        <div className={styles.sectionContent}>
          <div className={styles.sectionText}>
            <h2>Seamless Development Integration</h2>
            <p>Write better code with tools that understand your development context:</p>
            <ul>
              <li>Automatic branch naming and commit message formatting</li>
              <li>Code snippet generation based on issue context</li>
              <li>Real-time status updates without leaving your IDE</li>
            </ul>
            <Link className="button button--primary" to="/docs/integrations">
              View Integration Features
            </Link>
          </div>
          <div className={styles.sectionAnimation}>
            <CodeIntegrationAnimation />
          </div>
        </div>
      </section>

      <section className={styles.getStartedSection}>
        <h2>Ready to Transform Your Workflow?</h2>
        <p>Join thousands of developers using Shippi to streamline their development process.</p>
        <div className={styles.extensionButtons}>
          <Link className={styles.chromeButton} to="/docs/chrome-extension/install">
            <ChromeIcon />
            Install Chrome Extension
          </Link>
          <Link className={styles.vscodeButton} to="/docs/vscode-extension/install">
            <VSCodeIcon />
            Install VSCode Extension
          </Link>
        </div>
      </section>
    </div>
  );
}

function FloatingCTA() {
  return (
    <div className={styles.floatingCTA}>
      <div className={styles.floatingCTAContent}>
        <span>Ready to streamline your workflow?</span>
        <div className={styles.floatingCTAButtons}>
          <Link 
            className={styles.floatingVSCodeButton} 
            to="/docs/vscode-extension/install"
          >
            <VSCodeIcon />
            Install VSCode Extension
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 1000; // Show after scrolling 1000px
      document.body.classList.toggle('show-floating-cta', scrollPosition > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Learn how to ship code faster and more efficiently with AI-powered project management">
      <HomepageHeader />
      <main>
        <MainContent />
        <FloatingCTA />
      </main>
    </Layout>
  );
}
