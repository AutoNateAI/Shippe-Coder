import React from 'react';
import Layout from '@theme/Layout';
import styles from './prompts.module.css';

export default function Prompts(): JSX.Element {
  return (
    <Layout
      title="AI Prompts"
      description="Download curated prompts to supercharge your AI development workflow">
      <div className={styles.heroSection}>
        <h1>AI Prompts</h1>
        <p>Download curated prompts to supercharge your AI development workflow</p>
      </div>
      
      <main className={styles.promptsContainer}>
        <section className={styles.promptsSection}>
          <h2>AI Development Tools</h2>
          <p>Essential prompts and templates for AI-powered development</p>
          
          <div className={styles.promptsGrid}>
            <div className={styles.promptCard}>
              <div>
                <h3>AI Prompt Engineering Template</h3>
                <p>A comprehensive template for crafting effective AI prompts</p>
              </div>
              <a href="/downloads/prompt-engineering-template.pdf" className={styles.downloadButton}>
                Download
              </a>
            </div>

            <div className={styles.promptCard}>
              <div>
                <h3>Code Review Guidelines</h3>
                <p>AI-assisted code review guidelines and best practices</p>
              </div>
              <a href="/downloads/code-review-checklist.pdf" className={styles.downloadButton}>
                Download
              </a>
            </div>

            <div className={styles.promptCard}>
              <div>
                <h3>Bug Analysis Template</h3>
                <p>Structured prompts for AI-powered bug analysis and resolution</p>
              </div>
              <a href="/downloads/bug-analysis-template.pdf" className={styles.downloadButton}>
                Download
              </a>
            </div>
          </div>
        </section>

        <section className={styles.promptsSection}>
          <h2>Workflow Automation</h2>
          <p>Prompts for automating your development workflow</p>
          
          <div className={styles.promptsGrid}>
            <div className={styles.promptCard}>
              <div>
                <h3>PR Description Generator</h3>
                <p>Templates for generating comprehensive PR descriptions</p>
              </div>
              <a href="/downloads/pr-description-template.pdf" className={styles.downloadButton}>
                Download
              </a>
            </div>

            <div className={styles.promptCard}>
              <div>
                <h3>Commit Message Guide</h3>
                <p>AI prompts for writing clear and consistent commit messages</p>
              </div>
              <a href="/downloads/commit-message-guide.pdf" className={styles.downloadButton}>
                Download
              </a>
            </div>

            <div className={styles.promptCard}>
              <div>
                <h3>Documentation Helper</h3>
                <p>Prompts for generating and improving documentation</p>
              </div>
              <a href="/downloads/documentation-helper.pdf" className={styles.downloadButton}>
                Download
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
} 