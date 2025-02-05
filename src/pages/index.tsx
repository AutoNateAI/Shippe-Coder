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
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className="hero__title">The complete reference for AI-Powered Development</h1>
            <p className="hero__subtitle">
              Build applications capable of shipping features faster than ever before. Simple. Efficient. Reliable.
            </p>
            <div className={styles.headerButtons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/intro">
                Get Started
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/docs/tutorial">
                Start Building
              </Link>
            </div>
          </div>
          <HeroAnimation />
        </div>
      </div>
    </header>
  );
}

function MainContent() {
  return (
    <div className={styles.mainContent}>
      <div className={styles.featuresGrid}>
        <FeatureCard
          icon={<AiAssistantIcon />}
          title="Use AI Assistant"
          description="Learn how to leverage AI to streamline your development workflow and reduce cognitive load."
          link="/docs/ai-assistant"
          linkText="Learn More"
        />
        <FeatureCard
          icon={<ProjectManagementIcon />}
          title="Project Management"
          description="Experience seamless project management with AI-powered planning, estimation, and task prioritization."
          link="/docs/project-management"
          linkText="Explore Features"
        />
        <FeatureCard
          icon={<CodeGenerationIcon />}
          title="Code Generation"
          description="Generate high-quality code snippets and boilerplate while maintaining best practices."
          link="/docs/code-generation"
          linkText="Start Coding"
        />
      </div>

      <div className={styles.resourcesSection}>
        <h2>Developer Resources</h2>
        <div className={styles.resourcesGrid}>
          <Link to="/docs/tutorials" className={styles.resourceCard}>
            <TutorialIcon />
            <h3>Try a tutorial</h3>
            <p>Get started with hands-on tutorials and examples</p>
          </Link>
          <Link to="/docs/tools" className={styles.resourceCard}>
            <h3>Discover tools</h3>
            <p>Speed up development with our AI-powered tools</p>
          </Link>
          <Link to="/community" className={styles.resourceCard}>
            <h3>Join Community</h3>
            <p>Connect with other developers using AI tools</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Learn how to ship code faster and more efficiently with AI-powered project management">
      <HomepageHeader />
      <main>
        <MainContent />
      </main>
    </Layout>
  );
}
