class MazeFactory {
  public:
    static MazeFactory* Instance();
  protected:
    MazeFactory();
  private:
    static MazeFactory* _instance;
};
